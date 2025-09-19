document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const pictureEls = document.querySelectorAll('rht-picture');

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === "attributes") {
          let styleAttr = mutation.target.getAttribute('style');

          if (styleAttr.includes('color-scheme: dark')) {
            pictureEls.forEach((art) => {
              art.classList.add('dark');
            });
          } else {
            pictureEls.forEach((art) => {
              art.classList.remove('dark');
            });
          }
        }
      });
    });

    observer.observe(body, {
      attributes: true //configure it to listen to attribute changes
    });
});