let anchorSlider = (function() {

    function init() {
        // Функционал для перехлда по якорным ссылкам
        let singleTitlesItem = document.querySelectorAll(".goToAnchor");
        let headHight = document.querySelector('header').clientHeight;

        singleTitlesItem.forEach(function(item) {
            //console.log(item);

            // Если у элемента списка задан атрибут href 
            // href генерируется средствами Hugo на странице "single.html"
            if (typeof item.hasAttribute('href') !== 'undefined' && item.hasAttribute('href') !== false) {
                //console.log("Has attribute ID");
                
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    let hrefLink = $(this).attr('href').substring(1);
                    let offestY = $('#' + hrefLink).offset();
                    
                    // скролл без анимации прокрутки
                    // window.scrollTo(0, offestY.top);
                    
                    // скроллинг с плавной анимацией
                    $('html,body').stop().animate({ scrollTop: offestY.top - headHight }, 900);
                });
            }
        });
    }

    return {
        init: init
    }

})();

export {anchorSlider}

