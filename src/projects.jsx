import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav.jsx";
import ProjectFilter from "./components/ProjectFilter.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="page-content">
      <Nav />
      <section
        id="all-projects"
        className="all-projects-page"
        aria-labelledby="h-all-projects"
      >
        <div
          className="all-projects-bg-bubble all-projects-bg-bubble-a"
          aria-hidden="true"
        ></div>
        <div
          className="all-projects-bg-bubble all-projects-bg-bubble-b"
          aria-hidden="true"
        ></div>

        <div className="all-projects-intro">
          <h1>Where we build</h1>
          <h2>Open source in action.</h2>
          <p>
            We contribute to the upstream projects powering AI, hybrid cloud,
            Linux, automation, security, and more. By collaborating with
            communities, we build better technology for Red Hat’s product
            portfolio and the broader open source ecosystem.
          </p>
        </div>

        <ProjectFilter />
      </section>
      <Footer />
    </div>
  </StrictMode>,
);
