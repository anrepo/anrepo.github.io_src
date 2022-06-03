let headCarousel = (function() {

    function init() {
        if (existenceSlider()) {
            let carousel = $('.slick-carousel');
            carousel.not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                adaptiveHeight: true,
                autoplay: true,
                cssEase: 'linear',
                arrows: true,
                prevArrow: $('.slick-carousel__arrow-prev'),
                nextArrow: $('.slick-carousel__arrow-next'),
                swipe: true,
                swipeToSlide: true,
                autoplaySpeed: 4000,
                pauseOnHover: true,
                pauseOnFocus: true,
                useCss: false,
                centerMode: false,
                lazyLoad: "ondemand",
                useTransform: true,
                fade: true
            });
        } else {
            console.log("Карусель не найдена!");
        }
    }

    function existenceSlider() {
        return document.querySelector('.slick-carousel') ? true : false
    }

    return {
        init: init
    }

})();

export {headCarousel}