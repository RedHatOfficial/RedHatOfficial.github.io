import timelineData from '../data/timeline.json'

const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 }

// Turns a display label like "1999 (Aug 11)" or "Late 2025" into a sortable
// decimal-year value, so column placement reflects real chronological order
// instead of each milestone's index within its era.
function parseYearKey(label) {
  let match

  if ((match = label.match(/^(\d{4})$/))) {
    return Number(match[1])
  }
  if ((match = label.match(/^Early\s+(\d{4})$/i))) {
    return Number(match[1]) + 0.08
  }
  if ((match = label.match(/^Late\s+(\d{4})$/i))) {
    return Number(match[1]) + 0.92
  }
  if ((match = label.match(/^([A-Za-z]{3,9})\s+(\d{4})$/))) {
    const month = MONTHS[match[1].slice(0, 3).toLowerCase()]
    if (month) return Number(match[2]) + (month - 0.5) / 12
  }
  if ((match = label.match(/^(\d{4})\s*\(([A-Za-z]{3,9})(?:\s+(\d+))?\)$/))) {
    const year = Number(match[1])
    const month = MONTHS[match[2].slice(0, 3).toLowerCase()]
    const day = match[3] ? Number(match[3]) : 15
    if (month) return year + (month - 1) / 12 + day / 31 / 12
  }

  const fallback = label.match(/(\d{4})/)
  return fallback ? Number(fallback[1]) : 0
}

function buildMobileEras(eras) {
  return eras.map((era) => ({
    range: era.range,
    title: era.title,
    milestones: [...era.milestones]
      .map((milestone) => ({ ...milestone, key: parseYearKey(milestone.year) }))
      .sort((a, b) => a.key - b.key),
  }))
}

function buildGrid(eras) {
  const columns = []
  const headers = []
  const topNodes = []
  const bottomNodes = []

  eras.forEach((era, eraIndex) => {
    const eraTop = era.milestones
      .filter((milestone) => milestone.axis === 'top')
      .map((milestone) => ({ ...milestone, key: parseYearKey(milestone.year) }))
    const eraBottom = era.milestones
      .filter((milestone) => milestone.axis === 'bottom')
      .map((milestone) => ({ ...milestone, key: parseYearKey(milestone.year) }))

    const dateKeys = [...new Set([...eraTop, ...eraBottom].map((milestone) => milestone.key))].sort((a, b) => a - b)
    const colStart = columns.length + 1

    dateKeys.forEach((key, i) => {
      columns.push('card')
      const topMatch = eraTop.find((milestone) => milestone.key === key)
      const bottomMatch = eraBottom.find((milestone) => milestone.key === key)
      if (topMatch) topNodes.push({ ...topMatch, col: colStart + i })
      if (bottomMatch) bottomNodes.push({ ...bottomMatch, col: colStart + i })
    })

    headers.push({ range: era.range, title: era.title, colStart, span: dateKeys.length })

    if (eraIndex < eras.length - 1) {
      columns.push('gap')
    }
  })

  return { columns, headers, topNodes, bottomNodes }
}

const { columns, headers, topNodes, bottomNodes } = buildGrid(timelineData.eras)
const mobileEras = buildMobileEras(timelineData.eras)

const gridTemplateColumns = columns
  .map((type) => (type === 'card' ? 'var(--timeline-card-width)' : 'var(--timeline-gap-width)'))
  .join(' ')

function TimelineNode({ axis, milestone }) {
  const dot = <span className="timeline-dot" aria-hidden="true"></span>
  const connector = <span className="timeline-connector" aria-hidden="true"></span>
  const card = (
    <div className="timeline-card">
      <span className="timeline-card-year">{milestone.year}</span>
      <p className="timeline-card-text">{milestone.text}</p>
    </div>
  )

  return (
    <div className={`timeline-node timeline-node-${axis}`} style={{ gridColumn: milestone.col }}>
      {axis === 'top' ? (
        <>
          {card}
          {connector}
          {dot}
        </>
      ) : (
        <>
          {dot}
          {connector}
          {card}
        </>
      )}
    </div>
  )
}

function MobileTimelineItem({ milestone }) {
  return (
    <div className={`timeline-mobile-item timeline-node timeline-node-${milestone.axis}`}>
      <span className="timeline-dot" aria-hidden="true"></span>
      <div className="timeline-card">
        <span className="timeline-card-year">{milestone.year}</span>
        <p className="timeline-card-text">{milestone.text}</p>
      </div>
    </div>
  )
}

function Timeline() {
  return (
    <div className="timeline" role="group" aria-label="Red Hat open source history timeline">
      <div className="timeline-desktop">
        <div className="timeline-labels">
          <span className="timeline-label timeline-label-top">{timelineData.axisLabels.top}</span>
          <span className="timeline-label timeline-label-bottom">{timelineData.axisLabels.bottom}</span>
        </div>

        <div className="timeline-tracks" style={{ gridTemplateColumns }}>
          <span className="timeline-axis-line timeline-axis-line-top" aria-hidden="true"></span>
          <span className="timeline-axis-line timeline-axis-line-bottom" aria-hidden="true"></span>

          {headers.map((era) => (
            <div
              className="timeline-era-header"
              key={era.range}
              style={{ gridColumn: `${era.colStart} / span ${era.span}` }}
            >
              <span className="timeline-era-range">{era.range}</span>
              <span className="timeline-era-title">{era.title}</span>
            </div>
          ))}

          {columns.map((type, index) =>
            type === 'gap' ? (
              <span className="timeline-era-gap" aria-hidden="true" key={`gap-${index}`} style={{ gridColumn: index + 1 }}></span>
            ) : null
          )}

          {topNodes.map((milestone) => (
            <TimelineNode axis="top" milestone={milestone} key={`top-${milestone.year}-${milestone.text}`} />
          ))}

          {bottomNodes.map((milestone) => (
            <TimelineNode axis="bottom" milestone={milestone} key={`bottom-${milestone.year}-${milestone.text}`} />
          ))}
        </div>
      </div>

      <div className="timeline-mobile">
        <div className="timeline-mobile-legend">
          <span className="timeline-mobile-legend-item timeline-node-top">
            <span className="timeline-dot" aria-hidden="true"></span>
            {timelineData.axisLabels.top}
          </span>
          <span className="timeline-mobile-legend-item timeline-node-bottom">
            <span className="timeline-dot" aria-hidden="true"></span>
            {timelineData.axisLabels.bottom}
          </span>
        </div>

        <div className="timeline-mobile-list">
          {mobileEras.map((era) => (
            <div className="timeline-mobile-era" key={era.range}>
              <div className="timeline-mobile-era-header">
                <span className="timeline-era-range">{era.range}</span>
                <span className="timeline-era-title">{era.title}</span>
              </div>

              <div className="timeline-mobile-items">
                {era.milestones.map((milestone) => (
                  <MobileTimelineItem milestone={milestone} key={`${milestone.axis}-${milestone.year}-${milestone.text}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
