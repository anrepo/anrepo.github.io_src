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

    const newLang = ui.item.label.toLowerCase();

    const path = location.pathname;
    console.log(path);
    
    const partsPath = path.split('/');
    console.log(partsPath);

    // if (partsPath[1] == newLang) {

    // }


    // location.href = ui.item.label.toLowerCase();
}