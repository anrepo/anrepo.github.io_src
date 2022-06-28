$( ".dropdown-lang" ).selectmenu({
    appendTo: '#lang-wrap',
    change: changeLang,
    classes: {
        "ui-selectmenu-button": "lang-dropdown-button",
        "ui-selectmenu-menu": "lang-dropdown-menu"
    }
});

function changeLang(event, ui) {
    console.log(`Change lang on: ${ui.item.value}`);
    // console.log(event);
    // console.log(ui);

    location.href = ui.item.label.toLowerCase();
}