let navMenu = (function() {

    function init() {
        const links = document.querySelectorAll('.nav-menu-link');

        for (let item of links) {
            item.addEventListener('click', () => {
                clear(links);
                item.classList.add('nav-menu__active');
            });
        }
    }

    function clear(links) {
        for (let item of links) {
            item.classList.remove('nav-menu__active');
        }
    }

    return {
        init: init
    }

})();

export {navMenu}