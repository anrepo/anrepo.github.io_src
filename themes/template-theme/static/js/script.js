// Components
let introduceCarousel,
    cirleProgressBar,
    themeMode,
    anchorLinks,
    topButton,
    navLinks;

// Global Variables
let heightHeader;

document.addEventListener('DOMContentLoaded', function(){
	heightHeader = document.querySelector('header').clientHeight;
});

window.addEventListener('resize', function() {
    heightHeader = document.querySelector('header').clientHeight;
}, true);

// Добавление для шапки класса прилипания к верхней части экрана при скролле
// window.onscroll = function sticking(){
//     if (window.pageYOffset > 0) {
//         $("header").addClass("sticky-menu");
//     } else {
//         $("header").removeClass("sticky-menu");
//     }
// }


// // Передача аргументов
// function multiply(a, b, c) {
//     return a * b * c;
// }
// console.log(multiply(1, 2, 3));


// // Каррирование
// function multicarr(a) {
//     return (b) => {
//         return (c) => {
//             return a * b * c
//         }
//     }
// }
// console.log(multicarr(1)(2)(3));


// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});

// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });