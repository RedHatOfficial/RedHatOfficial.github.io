document.addEventListener('DOMContentLoaded', function() {
    const mainNavHashLinks = document.querySelectorAll(
        'rh-navigation-primary-item[href^="#"], rh-navigation-primary-item > a[href^="#"]'
    );

    for (let hashLink of mainNavHashLinks) {
        hashLink.addEventListener('click', function() {
            hashLink.closest('rh-navigation-primary').close();
        });
    }
});
