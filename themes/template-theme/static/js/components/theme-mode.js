let themeButton = (function() {

    let themeButton, themeMode;

    function init() {
        themeButton = document.querySelector('.switch-theme-mode');
        // console.log(themeButton);

        themeMode = localStorage.getItem('themeMode');
        // console.log(themeMode);

        if (themeMode) document.documentElement.setAttribute("data-theme", themeMode);
        else document.documentElement.setAttribute("data-theme", "light");

        themeButton.addEventListener('click', () => switchState());
    }

    function switchState() {
        if (themeButton) {
            let actualState = document.documentElement.getAttribute("data-theme");

            if (actualState == 'light') {
                document.documentElement.setAttribute("data-theme", "dark");
                console.log('Set "Dark" theme');

                localStorage.setItem('themeMode', 'dark');
                
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                console.log('Set "Light" theme');

                localStorage.setItem('themeMode', 'light');
            }

        } else {
            init()
        }
    }

    return {
        init: init,
        switchState: switchState
    }

})();

export {themeButton}