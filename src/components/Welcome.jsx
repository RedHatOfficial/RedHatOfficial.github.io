import '@rhds/elements/rh-icon/rh-icon.js'

function Welcome() {
  return (
    <section className='hero-container'>

       <div className="hero-content">
        <h1>
          Open source expertise.
          <br />
          Community-powered innovation.
        </h1>
        <p>We connect people, knowledge, and communities to help drive innovation in AI and beyond.</p>
        <a className="btn-cta btn-cta-primary" href="/about.html">
          Learn more
        </a>
      </div>

      <div className="hero-bubble-group" aria-hidden="true">
        <span className="hero-project-big-bubble"></span>
        <span className="hero-photo-bubbles hero-photo-a"></span>
        <span className="hero-photo-bubbles hero-photo-b"></span>
        <span className="hero-photo-bubbles hero-photo-c"></span>
        <span className="icon-bubbles hero-icon-a">
          <rh-icon set="ui" icon="ai-experience"></rh-icon>
        </span>
        <span className="icon-bubbles hero-icon-b">
          <rh-icon set="ui" icon="users"></rh-icon>
        </span>
      </div>

    </section>
  )
}

export default Welcome
