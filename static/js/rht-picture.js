document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const pictureEls = document.querySelectorAll('rht-picture');

    let prefersDark = false;
    const colorScheme = localStorage.getItem('rhdsColorScheme');

    if (!colorScheme || colorScheme === 'light dark') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        prefersDark = true;
        pictureEls.forEach((art) => {
          art.classList.add('dark');
        });
      }
    }

    if (colorScheme === 'dark') {
      pictureEls.forEach((art) => {
        art.classList.add('dark');
      });
    } else if (colorScheme === 'light') {
      pictureEls.forEach((art) => {
        art.classList.remove('dark');
      });
    } 

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const styleAttr = body.getAttribute('style');

          if (styleAttr === 'color-scheme: dark;') {
            pictureEls.forEach((art) => {
              art.classList.add('dark');
            });
          } else if (styleAttr === 'color-scheme: light;') {
            pictureEls.forEach((art) => {
              art.classList.remove('dark');
            });
          } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              pictureEls.forEach((art) => {
                art.classList.add('dark');
              });
            } else {
              pictureEls.forEach((art) => {
                art.classList.remove('dark');
              });
            }
          }
        }
      });
    });

    observer.observe(body, {
      attributes: true //configure it to listen to attribute changes
    });
});