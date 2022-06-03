let toTopBtn = (function() {

    function init() {
        /**
         * Функционал кнопки "Наверх"
         */
        let topBtn = document.querySelector('.toTopBtn');

        topBtn.addEventListener("click", () => {
            // скроллинг наверх страницы без анимации
            // window.scrollTo(0,0);

            // скроллинг наверх страницы с анимацией
            $('html,body').stop().animate({ scrollTop: 0 }, 900);
        });

        // Максимальная позиция скролла
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // console.log('scrollHeight: ' + scrollHeight);

        // Отображаем кнопку "Наверх" если есть скролл на странице
        if (topBtn.classList.contains('hidden')) {
            if (window.innerHeight !== scrollHeight) {
                topBtn.classList.remove('hidden');
            }
        } else {
            topBtn.classList.add('hidden');
        }

        // Кнопка НЕ должна заползать на Footer
        let footerElem = document.getElementsByClassName('copyright');
        let footerOffsetHeight = footerElem[0].offsetHeight;
        // console.log("footerOffsetHeight: " + footerOffsetHeight);

        // 1. Взять текущее значение свойства bottom, определяется в CSS.
        // 2. Убираем приставку "px". Регулярное выражение уберет все НЕ числа,
        //    НЕ точки и остается только число с типом String.
        // 3. Преобразуем в число используя parseInt().
        // 4. Прибавить к текущему значению свойства bottom значение высоты Footer

        let bottomBase = getComputedStyle(topBtn).bottom;
        const cleanBottomBase = parseInt(bottomBase.replace(/[^-\d\.]/g, ''));
        // console.log('cleanBottomBase: ' + cleanBottomBase);


        window.addEventListener('scroll', function() {
            // Установка смещения кнопки "Наверх" над Подвалом
            offsetTopBtn();
        });

        window.addEventListener('resize', function() {
            // console.log('Ресайз! Событие 1. Обработка Кнопки "Наверх".');

            // При ресайзе может измениться высота страницы
            // поэтому переменные нужно переопределить
            scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // console.log('scrollHeight: ' + scrollHeight);

            // При ресайзе может измениться высота подвала
            // поэтому высоту подвала нужно переопределить
            footerOffsetHeight = footerElem[0].offsetHeight;
            // console.log("footerOffsetHeight: " + footerOffsetHeight);

            // Исправляем положение кнопки "Наверх"
            offsetTopBtn();
        }, true);


        let posTop, deltaPos;

        // Установка смещения кнопки "Наверх" над Подвалом
        function offsetTopBtn() {

            // определение позиции скролла (!взято на просторах интернета!)
            posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            // console.log('Scroll Position: ' + Math.round(posTop));

            if (Math.round(posTop) === 0) {
                topBtn.classList.remove('button-top__active');
            } else {
                // Активирует кнопку при скролле
                topBtn.classList.add('button-top__active');

                deltaPos = scrollHeight - Math.round(posTop);
                // console.log('deltaPos: ' + deltaPos);
                // console.log("Minus Footer: " + (footerOffsetHeight - deltaPos));
                
                if ((scrollHeight - footerOffsetHeight) <= posTop) {
                    topBtn.style.marginBottom = cleanBottomBase + (footerOffsetHeight - deltaPos) + "px";
                } else {
                    topBtn.hasAttribute('style') ? topBtn.removeAttribute('style') : false;
                }
            }
        }

        // End "Функционал кнопки "Наверх"
    }

    return {
        init: init
    }

})();

export {toTopBtn}