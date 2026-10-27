import '@rhds/elements/rh-icon/rh-icon.js'

const disciplines = [
  {
    title: 'Architect',
    icon: 'blueprint',
    description: 'Community strategy, governance, ecosystem design and contributor networks.',
  },
  {
    title: 'Analyze',
    icon: 'analyze',
    description: 'Data, contribution intelligence, ecosystem health and strategic insights.',
  },
  {
    title: 'Operate',
    icon: 'settings',
    description: 'Program operations, foundations, working groups and community infrastructure.',
  },
  {
    title: 'Lead',
    icon: 'flag',
    description:
      'Cross-functional programs that turn technical ambition into sustainable upstream execution.',
  },
]

function AboutWhatWeDo() {
  return (
    <section className="about-what-we-do" aria-labelledby="h-about-what-we-do">
      <div className="container about-section-intro">
        <h1 id="h-about-what-we-do">Community is our product</h1>
        <p>
          Our work isn&rsquo;t measured in products we ship. It&rsquo;s measured in communities we
          strengthen, standards we influence, contributors we enable and technologies we help
          move forward.
        </p>
      </div>

      <div className="about-cards-grid">
        {disciplines.map((discipline) => (
          <div className="about-card" key={discipline.title}>
            <span className="about-icon-badge" aria-hidden="true">
              <rh-icon set="ui" icon={discipline.icon}></rh-icon>
            </span>
            <h3>{discipline.title}</h3>
            <p>{discipline.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutWhatWeDo
