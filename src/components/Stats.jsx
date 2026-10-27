function Stats() {
  return (
    <section className="hero-container stats-container">
      <span className="stats-stewardships-big-bubble"></span>
      <span className="stats-stewardships-big-bubble-2"></span>

      <div className="stats-scale-copy">
        <h1>
          <span className="stats-headline-line">Open source expertise.</span>
          <span className="stats-headline-line">
            Community-powered innovation.
          </span>
        </h1>
        <p>
          We bring people, knowledge, and communities together to advance open
          source, AI, and beyond. By fostering collaboration, strengthening
          security, and advancing open governance, we help build technology that
          lasts.
        </p>
        <a className="btn-cta btn-cta-primary" href="/about.html">
          Learn more
        </a>
      </div>

      <ul className="stat-cluster">
        <li className="stat-circle stat-years">
          <strong>30+</strong>
          <span>years</span>
        </li>
        <li className="stat-circle stat-projects">
          <strong>3,000+</strong>
          <span>Projects</span>
        </li>
        <li className="stat-circle stat-contributors">
          <strong>10,000+</strong>
          <span>Contributors</span>
        </li>
      </ul>
    </section>
  );
}

export default Stats;
