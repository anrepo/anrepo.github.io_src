$( ".dropdown-lang" ).selectmenu({
    appendTo: '#lang-wrap',
    change: changeLang,
    classes: {
        "ui-selectmenu-button": "lang-dropdown-button",
        "ui-selectmenu-menu": "lang-dropdown-menu"
    }
});

function changeLang() {
    console.log('Change Language');
}