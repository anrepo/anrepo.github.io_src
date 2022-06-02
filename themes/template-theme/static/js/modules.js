import {headCarousel} from './components/carousel.js';
import {progressCircle} from './components/circle-progress.js';


/**
 * Определение глобальных переменных для внешнего использования
 */
introduceCarousel = headCarousel;
cirleProgressBar = progressCircle;


// console.log(introduceCarousel);



/**
 * Первичный запуск методов
 */
introduceCarousel.init();
