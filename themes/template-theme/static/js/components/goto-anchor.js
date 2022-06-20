let anchorSlider = (function() {

    function init() {
        // Функционал для перехода по якорным ссылкам
        let singleTitlesItem = document.querySelectorAll(".goToAnchor");

        singleTitlesItem.forEach(function(item) {
            // Если у элемента списка задан атрибут href 
            // href генерируется средствами Hugo на странице "single.html"
            if (typeof item.hasAttribute('href') !== 'undefined' && item.hasAttribute('href') !== false) {
                
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    let hrefLink = $(this).attr('href').substring(1);
                    let offestY = $('#' + hrefLink).offset();
                    
                    // скроллинг с плавной анимацией
                    $('html,body').stop().animate({ scrollTop: offestY.top - heightHeader }, 900);
                });
            }
        });
    }

    return {
        init: init
    }

})();

export {anchorSlider}

