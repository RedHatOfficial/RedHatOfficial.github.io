function Stats() {
  return (
    <section className="stats-container" aria-labelledby="h-stats-scale">
      <span className="stats-memberships-big-bubble"></span>
      <ul className="stat-cluster">
        <li className="stat-circle stat-years">
          <strong>30</strong>
          <span>years</span>
        </li>
        <li className="stat-circle stat-projects">
          <strong>3000+</strong>
          <span>Projects</span>
        </li>
        <li className="stat-circle stat-contributors">
          <strong>10,000+</strong>
          <span>Contributors</span>
        </li>
      </ul>

      <div className="stats-scale-copy">
        <h1 id="h-stats-scale">Open source at scale</h1>
        <p>We believe the best technology is built together.</p>
        <p>
          Red Hat works with open source communities to foster collaboration, strengthen security, and advance governance — helping create technology that lasts.
        </p>
      </div>
    </section>
  )
}

export default Stats
