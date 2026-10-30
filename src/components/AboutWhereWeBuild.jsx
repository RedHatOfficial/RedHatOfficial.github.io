import { useLayoutEffect, useRef } from 'react'
import '@rhds/elements/rh-icon/rh-icon.js'

const tagRows = [
  [
    { label: 'AI & ML', icon: 'ai-model' },
    { label: 'Cloud Native', icon: 'hybrid-cloud' },
    { label: 'Operating Systems', icon: 'server' },
  ],
  [
    { label: 'Automation', icon: 'automation' },
    { label: 'Security', icon: 'security' },
    { label: 'Hardware', icon: 'circuit' },
  ],
  [
    { label: 'Edge', icon: 'cloud-edge' },
    { label: 'Telco', icon: 'mobile-phone' },
    { label: 'Automotive', icon: 'car' },
  ],
]

const CAROUSEL_SPEED_PX_PER_SEC = 10
const ROW_REPEAT = 4

function TagCarousel({ rowTags, reverse }) {
  const trackRef = useRef(null)
  const setLength = rowTags.length * ROW_REPEAT
  const tags = Array(2)
    .fill(rowTags)
    .flatMap((group) => Array(ROW_REPEAT).fill(group).flat())

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateLoopDistance = () => {
      const seamTag = track.children[setLength]
      if (!seamTag) return
      const distance = seamTag.offsetLeft
      if (!distance) return
      track.style.setProperty('--carousel-distance', `${distance}px`)
      track.style.setProperty(
        '--carousel-duration',
        `${distance / CAROUSEL_SPEED_PX_PER_SEC}s`,
      )
    }

    updateLoopDistance()
    window.addEventListener('resize', updateLoopDistance)
    return () => window.removeEventListener('resize', updateLoopDistance)
  }, [setLength])

  return (
    <div
      className="about-tag-carousel"
      aria-label={`Technology layers: ${rowTags.map((tag) => tag.label).join(', ')}`}
    >
      <ul
        className={`about-tag-track${reverse ? ' about-tag-track-reverse' : ''}`}
        ref={trackRef}
      >
        {tags.map((tag, index) => (
          <li
            className="about-tag"
            key={`${tag.label}-${index}`}
            aria-hidden={index >= setLength}
          >
            <rh-icon set="ui" icon={tag.icon} aria-hidden="true"></rh-icon>
            {tag.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AboutWhereWeBuild() {
  return (
    <section className="about-where-we-build" aria-labelledby="h-about-where-we-build">
      <div className="container about-section-intro">
        <h1 id="h-about-where-we-build">Where we build upstream</h1>
        <p>
          Our portfolio spans the technology layers and industries that define the modern hybrid
          cloud&mdash;and increasingly, the AI stack.
        </p>
      </div>
      <div className="about-tag-carousel-stack">
        {tagRows.map((rowTags, index) => (
          <TagCarousel key={index} rowTags={rowTags} reverse={index === 1} />
        ))}
      </div>
    </section>
  )
}

export default AboutWhereWeBuild
