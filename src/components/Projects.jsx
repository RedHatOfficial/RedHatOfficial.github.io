import { useEffect, useLayoutEffect, useRef } from "react";
import projects from "../data/projects.json";

const logoModules = import.meta.glob("../assets/logos/*", {
  eager: true,
  import: "default",
});
const logoUrls = Object.fromEntries(
  Object.entries(logoModules).map(([path, url]) => [
    path.split("/").pop(),
    url,
  ]),
);

const projectCards = projects.filter((project) => project.featured);
const cards = [...projectCards, ...projectCards];
const EASE_DURATION_MS = 500;
const CAROUSEL_SPEED_PX_PER_SEC = 60;

function Projects() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const distanceRef = useRef(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateLoopDistance = () => {
      const firstCard = track.children[0];
      const seamCard = track.children[projectCards.length];
      if (!firstCard || !seamCard) return;
      const distance = seamCard.offsetLeft - firstCard.offsetLeft;
      if (!distance) return;
      distanceRef.current = distance;
      track.style.setProperty("--carousel-distance", `${distance}px`);
      track.style.setProperty(
        "--carousel-duration",
        `${distance / CAROUSEL_SPEED_PX_PER_SEC}s`,
      );
    };

    updateLoopDistance();
    const resizeObserver = new ResizeObserver(updateLoopDistance);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const resetIfPastSeam = () => {
      const distance = distanceRef.current;
      if (distance && carousel.scrollLeft >= distance) {
        carousel.scrollLeft -= distance;
      }
    };

    if ("onscrollend" in window) {
      carousel.addEventListener("scrollend", resetIfPastSeam, {
        passive: true,
      });
      return () => carousel.removeEventListener("scrollend", resetIfPastSeam);
    }

    let settleTimer;
    const handleScroll = () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(resetIfPastSeam, 120);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(settleTimer);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    let frame;

    const rampPlaybackRateTo = (target) => {
      cancelAnimationFrame(frame);
      const animation = track.getAnimations()[0];
      if (!animation) return;

      if (target > 0 && animation.playState === "paused") animation.play();

      const start = animation.playbackRate;
      const startTime = performance.now();

      const step = (now) => {
        const t = Math.min((now - startTime) / EASE_DURATION_MS, 1);
        const eased = t * (2 - t);
        animation.playbackRate = start + (target - start) * eased;
        if (t < 1) {
          frame = requestAnimationFrame(step);
        } else if (target === 0) {
          animation.pause();
        }
      };
      frame = requestAnimationFrame(step);
    };

    const handleEnter = () => rampPlaybackRateTo(0);
    const handleLeave = () => rampPlaybackRateTo(1);

    carousel.addEventListener("pointerenter", handleEnter);
    carousel.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      carousel.removeEventListener("pointerenter", handleEnter);
      carousel.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="explore-projects"
      className="projects-container"
      aria-labelledby="h-explore-projects"
    >
      <div className="container explore-projects-intro">
        <h1 id="h-explore-projects">Explore projects</h1>
        <p>
          We contribute to the upstream projects powering AI, hybrid cloud,
          Linux, automation, security, and more. By collaborating with
          communities, we build better technology for Red Hat’s product
          portfolio and the broader open source ecosystem.
        </p>
        <a
          className="btn-cta btn-cta-primary"
          href={`${import.meta.env.BASE_URL}projects.html`}
        >
          Explore projects
        </a>
      </div>

      <div
        className="project-carousel"
        role="group"
        aria-label="Featured open source projects"
        ref={carouselRef}
      >
        <div className="project-carousel-track" ref={trackRef}>
          {cards.map((project, index) => (
            <a
              className="project-card"
              href={project.href}
              key={`${project.logo}-${index}`}
              target="_blank"
              rel="noreferrer"
              tabIndex={index < projectCards.length ? 0 : -1}
              aria-hidden={index >= projectCards.length}
            >
              <img
                className="project-card-logo"
                src={logoUrls[project.logo]}
                alt={project.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
