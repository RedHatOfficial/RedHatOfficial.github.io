import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav.jsx";
import StewardshipFilter from "./components/StewardshipFilter.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="page-content">
      <Nav />
      <section
        id="all-stewardships"
        className="all-projects-page"
        aria-labelledby="h-all-stewardships"
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
          <h1>Where we steward</h1>
          <h2>Shaping the future of open source, together.</h2>
          <p>
            We invest in and work with foundations, alliances, communities, and
            standards bodies. Through shared governance and stewardship, we keep
            the open source ecosystem secure, responsible, sustainable, and
            adaptable.
          </p>
        </div>

        <StewardshipFilter />
      </section>
      <Footer />
    </div>
  </StrictMode>,
);
