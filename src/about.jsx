import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './viewportHeight.js'
import Nav from './components/Nav.jsx'
import AboutHero from './components/AboutHero.jsx'
import AboutWhatWeDo from './components/AboutWhatWeDo.jsx'
import AboutWhatsNext from './components/AboutWhatsNext.jsx'
import AboutWhereWeBuild from './components/AboutWhereWeBuild.jsx'
import Timeline from './components/Timeline.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="page-content">
        <Nav />
        <AboutHero />
        <AboutWhatWeDo />
        <AboutWhatsNext />
        <AboutWhereWeBuild />
        <section id="about-history" aria-labelledby="h-about-history">
          <div className="container about-history-intro">
            <h1 id="h-about-history">30 years of open source at Red Hat</h1>
            <p>
              From a fledgling Linux distributor to a cornerstone of enterprise open source and
              agentic AI, explore the milestones that shaped Red Hat&rsquo;s journey &mdash; from
              technology and corporate growth to the community and the OSAIPO work that stewards it.
            </p>
          </div>
          <Timeline />
        </section>
        <Footer />
      </div>
  </StrictMode>,
)
