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


// Инициализация круговых прогресс баров скилов
cirleProgressBar.init();

// Установка значений для кругов прогресса
cirleProgressBar.circles.html.setProgress(84);
cirleProgressBar.circles.css.setProgress(71);
cirleProgressBar.circles.js.setProgress(76);
