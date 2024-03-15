import {headCarousel} from './components/carousel.js';
import {progressCircle} from './components/circle-progress.js';
import {themeButton} from './components/theme-mode.js';
import {anchorSlider} from './components/goto-anchor.js';
import {toTopBtn} from './components/goto-top-button.js';
import {navMenu} from './components/header-nav-menu.js';
import {readingProcess} from './components/reading-process.js';

/**
 * Определение глобальных переменных для внешнего использования
 */
introduceCarousel   = headCarousel;
cirleProgressBar    = progressCircle;
themeMode           = themeButton;
anchorLinks         = anchorSlider;
topButton           = toTopBtn;
navLinks            = navMenu;
readingBar          = readingProcess;

/**
 * Инициализация Режима переключения цветовой темы
 */
themeMode.init();

// console.log(introduceCarousel);

/**
 * Первичный запуск методов
 */
introduceCarousel.init();

/** 
 * Инициализация круговых прогресс баров скилов
 */
cirleProgressBar.init();

// Установка значений для кругов прогресса
cirleProgressBar.circles.html.setProgress(88);
cirleProgressBar.circles.css.setProgress(83);
cirleProgressBar.circles.js.setProgress(76);
cirleProgressBar.circles.git.setProgress(81);
cirleProgressBar.circles.gulp.setProgress(71);
cirleProgressBar.circles.leaflet.setProgress(43);

/**
 * Инициализация плавной прокрутки по якорным ссылкам
 */
anchorLinks.init();

/**
 * Инициализация кнопки "Наверх"
 */
topButton.init();

/**
 * Инициализация навигационных ссылок
 */
navLinks.init();
