import "@rhds/elements/rh-icon/rh-icon.js";

function AboutHero() {
  return (
    <div className="about-hero-wrap">
      <section className="hero-container" aria-labelledby="h-about-hero">
        <div className="hero-content about-hero-content">
          <h1 id="h-about-hero">We build upstream.</h1>
          <p>
            We help open source communities build the technologies, standards and
            ecosystems that power tomorrow’s enterprise.
          </p>
          <div className="about-hero-actions">
            <a className="btn-cta btn-cta-primary" href={`${import.meta.env.BASE_URL}projects.html`}>
              Explore our upstream portfolio
            </a>
            <a className="btn-cta btn-cta-secondary" href={`${import.meta.env.BASE_URL}#contact-us`}>
              Get in touch
            </a>
          </div>
        </div>

        <div className="about-hero-bubble-group" aria-hidden="true">
          <span className="about-hero-photo-bubbles about-hero-photo-a"></span>
          <span className="about-hero-photo-bubbles about-hero-photo-b"></span>
          <span className="about-hero-photo-bubbles about-hero-photo-c"></span>
        </div>
      </section>

      <div className="about-hero-big-bubble-frame" aria-hidden="true">
        <span className="about-hero-project-big-bubble"></span>
      </div>
    </div>
  );
}

export default AboutHero;
