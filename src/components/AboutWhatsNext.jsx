const principles = [
  {
    title: 'Verifiable',
    lead: 'Build in the open',
    description: 'Open development makes AI technologies easier to inspect, test and evaluate',
  },
  {
    title: 'Adaptable',
    lead: 'Keep your choices open',
    description:
      'Open technology gives organizations the freedom to evolve their stack, models and infrastructure',
  },
  {
    title: 'Resilient',
    lead: 'Build together',
    description:
      'Open standards, shared expertise and distributed stewardship create stronger technology ecosystems',
  },
]

function AboutWhatsNext() {
  return (
    <section className="about-whats-next" aria-labelledby="h-about-whats-next">
      <span className="about-whats-next-big-bubble"></span>
      <div className="container about-section-intro">
        <h1 id="h-about-whats-next">Open source powers what&rsquo;s next in AI</h1>
        <p>
          AI is becoming foundational infrastructure. We believe that infrastructure should
          remain open, inspectable and adaptable&mdash;so organizations can innovate without
          surrendering control of the technology underneath.
        </p>
      </div>

      <div className="about-principles-grid">
        {principles.map((principle) => (
          <div className="about-principle" key={principle.title} tabIndex={0}>
            <div className="about-principle-face">
              <h3>{principle.title}</h3>
              <p className="about-principle-lead">{principle.lead}</p>
            </div>
            <p className="about-principle-description">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutWhatsNext
