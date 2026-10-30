import { useMemo, useState } from 'react'
import '@rhds/elements/rh-icon/rh-icon.js'
import stewardships from '../data/stewardships.json'

const logoModules = import.meta.glob('../assets/logos/*', {
  eager: true,
  import: 'default',
})
const logoUrls = Object.fromEntries(
  Object.entries(logoModules).map(([path, url]) => [path.split('/').pop(), url]),
)

function StewardshipFilter() {
  const [search, setSearch] = useState('')

  const filteredStewardships = useMemo(() => {
    const query = search.trim().toLowerCase()
    return stewardships.filter((stewardship) =>
      !query || stewardship.name.toLowerCase().includes(query),
    )
  }, [search])

  return (
    <div className="all-projects-filter-container">
      <div className="all-projects-toolbar">
        <div className="all-projects-search">
          <rh-icon set="ui" icon="search" aria-hidden="true"></rh-icon>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search stewardships"
            aria-label="Search stewardships"
          />
        </div>
      </div>

      {filteredStewardships.length === 0 ? (
        <p className="all-projects-empty">No stewardships match your search.</p>
      ) : (
        <div className="all-projects-grid">
          {filteredStewardships.map((stewardship) => {
            const logoSrc = stewardship.logo ? logoUrls[stewardship.logo] : undefined
            const content = logoSrc ? (
              <img className="project-tile-logo" src={logoSrc} alt={stewardship.name} />
            ) : (
              <span className="project-tile-name">{stewardship.name}</span>
            )

            if (!stewardship.href) {
              return (
                <div
                  className="project-tile project-tile-disabled project-tile-no-description"
                  key={stewardship.name}
                  aria-disabled="true"
                  title={stewardship.name}
                >
                  {content}
                </div>
              )
            }

            return (
              <a
                className="project-tile project-tile-no-description"
                href={stewardship.href}
                key={stewardship.name}
                target="_blank"
                rel="noreferrer"
                title={stewardship.name}
              >
                {content}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default StewardshipFilter
