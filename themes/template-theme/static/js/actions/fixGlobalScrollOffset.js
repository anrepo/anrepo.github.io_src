// fixGlobalScrollOffset.js

// после загрузки страницы
window.onload = function() {
    // посчитать ширину скролла и сделать смещение если нужно
    calcScroll();
};

// при изменении размера окна браузера
window.addEventListener(`resize`, event => {
    // преесчитать ширину скролла и сделать смещение если нужно
    calcScroll();
}, false);

// вычисление ширины скролла
function calcScroll() {
    // вычисление ширины скролла
    // (!) window.innerWidth не работает в IE8 и меньше
    let scroll_width = window.innerWidth - document.documentElement.clientWidth;    

    // document.documentElement.scrollHeight _ размер окна без скролла
    // document.documentElement.offsetHeight _ смещение на размер скролла
    if (scroll_width <= 0) {
        console.log('Скролла нет. Ширина скролла = ' + scroll_width + '.');
        removeMarginBody();
    } else {
        console.log('Есть скролл. Ширина скролла = ' + scroll_width + '.');
        // addMarginBody(scroll_width);
    }
}

// обнуление 
function removeMarginBody() {
    document.body.style.marginRight = 0 + 'px';
}

// добавление смещения для body
function addMarginBody(scroll_width) {
    console.log('Передан scroll_width = ' + scroll_width + 'px');
    document.body.style.marginRight = '-' + scroll_width + 'px';
}