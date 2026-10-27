// Mobile browsers resize the layout viewport as their address bar/toolbar
// shows and hides while scrolling. CSS `dvh`/`svh` are supposed to insulate
// layout from that, but some mobile WebKit versions still recompute `svh`
// on every toolbar toggle, making full-screen sections (and anything
// positioned as a percentage of them) visibly jump while scrolling. Track
// the viewport height ourselves and only update it on real size changes
// (orientation/resize), not on toolbar-only height changes, and expose it
// as --app-vh for sections that need a stable "100vh".
let lastWidth = window.innerWidth;

function setAppViewportHeight() {
  document.documentElement.style.setProperty("--app-vh", `${window.innerHeight}px`);
}

function handlePossibleResize() {
  if (window.innerWidth !== lastWidth) {
    lastWidth = window.innerWidth;
    setAppViewportHeight();
  }
}

setAppViewportHeight();
window.addEventListener("resize", handlePossibleResize);
window.addEventListener("orientationchange", setAppViewportHeight);
