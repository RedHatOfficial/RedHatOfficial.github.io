import { useEffect, useMemo, useRef, useState } from 'react'
import '@rhds/elements/rh-icon/rh-icon.js'
import projects from '../data/projects.json'

const logoModules = import.meta.glob('../assets/logos/*', {
  eager: true,
  import: 'default',
})
const logoUrls = Object.fromEntries(
  Object.entries(logoModules).map(([path, url]) => [path.split('/').pop(), url]),
)

const categories = [...new Set(projects.map((project) => project.category))]
const categoryColors = Object.fromEntries(
  categories.map((category, index) => [
    category,
    `hsl(${Math.round((index * 360) / categories.length)}deg 70% 55%)`,
  ]),
)

function ProjectFilter() {
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(() => new Set())
  const [filterOpen, setFilterOpen] = useState(false)
  const filterRef = useRef(null)

  useEffect(() => {
    if (!filterOpen) return

    const handlePointerDown = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setFilterOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [filterOpen])

  const toggleCategory = (category) => {
    setSelectedCategories((previous) => {
      const next = new Set(previous)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesSearch = !query || project.name.toLowerCase().includes(query)
      const matchesCategory =
        selectedCategories.size === 0 || selectedCategories.has(project.category)
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategories])

  return (
    <div className="all-projects-filter-container">
      <div className="all-projects-toolbar">
        <div className="all-projects-search">
          <rh-icon set="ui" icon="search" aria-hidden="true"></rh-icon>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
          />
        </div>

        <div className="all-projects-filter" ref={filterRef}>
          <button
            type="button"
            className="all-projects-filter-toggle"
            aria-expanded={filterOpen}
            onClick={() => setFilterOpen((open) => !open)}
          >
            <rh-icon set="ui" icon="filter" aria-hidden="true"></rh-icon>
            Filter
          </button>

          {filterOpen && (
            <div className="all-projects-filter-popover" role="group" aria-label="Filter by category">
              {categories.map((category) => (
                <label className="all-projects-filter-option" key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.has(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span
                    className="all-projects-category-dot"
                    style={{ backgroundColor: categoryColors[category] }}
                    aria-hidden="true"
                  ></span>
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="all-projects-empty">No projects match your search.</p>
      ) : (
        <div className="all-projects-grid">
          {filteredProjects.map((project) => {
            const logoSrc = project.logo ? logoUrls[project.logo] : undefined
            const content = logoSrc ? (
              <img className="project-tile-logo" src={logoSrc} alt={project.name} />
            ) : (
              <span className="project-tile-name">{project.name}</span>
            )
            const description = project.description ? (
              <span className="project-tile-description">{project.description}</span>
            ) : null

            if (!project.href) {
              return (
                <div
                  className="project-tile project-tile-disabled"
                  key={project.name}
                  aria-disabled="true"
                  title={project.name}
                >
                  {content}
                  {description}
                </div>
              )
            }

            return (
              <a
                className="project-tile"
                href={project.href}
                key={project.name}
                target="_blank"
                rel="noreferrer"
                title={project.name}
              >
                {content}
                {description}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProjectFilter
