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
cirleProgressBar.circles.html.setProgress(88);
cirleProgressBar.circles.css.setProgress(83);
cirleProgressBar.circles.js.setProgress(76);
cirleProgressBar.circles.git.setProgress(81);
cirleProgressBar.circles.gulp.setProgress(71);
cirleProgressBar.circles.leaflet.setProgress(43);