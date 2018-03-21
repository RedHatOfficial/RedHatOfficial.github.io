/* ----- SMOOTH SCROLL ----- */
const smoothScroll = {
  onclick: function( $target, hash ) {
    document.getElementsByTagName("html, body").animate({
      scrollTop: $target.offset().top + 15
    }, 500, "swing");

    // Update the hash link
    if (history.pushState) {
      history.pushState(null, null, hash);
    } else {
      location.hash = hash;
    }
  }
};

// Smooth scroll to the anchor id on click
const links = document.getElementsByTagName("a[href^=\"#\"]");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(evt){
    if (this.hash) {
      let $target = document.getElementById(this.hash);
      // If a target element exists in the DOM
      if ($target.length > 0) {
        evt.preventDefault();
        smoothScroll.onclick($target, this.hash);
      }
    }
  }, false);
}

// Smooth scroll to the anchor id on page load
if (window.location.hash) {
  const hash = window.location.hash.slice(1).split("?").shift().match(/^[a-z]+[a-z0-9\-_:\.]*$/i);
  if (hash && hash.shift) {
    let $target = document.getElementById(hashOnly);
    // If a target element exists in the DOM
    if ($target.length > 0) {
      smoothScroll.onclick($target, "#".concat(hash.shift()));
    }
  }
}
