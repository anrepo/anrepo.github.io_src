const opt = {
  screenWidth: window.screen.width,
};

function initSlider(sliderElement, loop = "false") {
  // Получаем элементы слайдера
  const prevButton = sliderElement.querySelector(".js--prev");
  const nextButton = sliderElement.querySelector(".js--next");
  const slideTrack = sliderElement.querySelector(".js--track");
  const slides = slideTrack.querySelectorAll(".js--item");
  const currentCountEl = sliderElement.querySelector(".js--current-slide");
  const totalCountEl = sliderElement.querySelector(".js--total-slide");
  const navigation = sliderElement.querySelector(".js--slider-nav");
  let navDot = "";
  const slideCount = slides.length;
  let slideIndex = 0;

  let slideWidth = slides[0].clientWidth;
  let slideTrackPosition = 0;
  let slideTrackWidth = slideTrack.scrollWidth;
  let spaceWidth =
    (slideTrackWidth - slideWidth * slideCount) / (slideCount - 1);
  let showSlides = Math.round(sliderElement.clientWidth / slideWidth);
  let earlyShowSlides = slideIndex;

  slideTrack.style.position = "relative";
  slideTrack.style.left = slideTrackPosition + "px";

  // Устанавливаем обработчики событий для кнопок
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Перезапуск слайдера
  function restartSlider() {
    slideIndex = 0;
    earlyShowSlides = slideIndex;
    slideTrackPosition = 0;
    slideTrack.style.left = 0;
    prevButton.disabled = true;
    nextButton.disabled = false;
  }

  // Зацикливание слайдера
  function loopSlider(timer) {
    setInterval(() => {
      if (slideIndex + showSlides === slideCount) {
        restartSlider();
      } else showNextSlide();
    }, timer);
  }

  // Функция для показа предыдущего слайда
  function showPreviousSlide() {
    if (checkFinalIndex(slideIndex - 1)) {
      slideTrackPosition = slideTrackPosition + slideWidth + spaceWidth;
      slideIndex -= 1;

      if (sliderElement.querySelector(".js--counter")) {
        currentCountEl.innerText = slideIndex + showSlides;
      }

      nextButton.disabled = false;

      if (slideIndex + showSlides === showSlides) {
        prevButton.disabled = true;
      }

      if (navDot) updateDots();

      updateslideTrackPosition();
    }
  }

  // Функция для показа следующего слайда
  function showNextSlide() {
    if (checkFinalIndex(slideIndex + 1)) {
      slideTrackPosition = slideTrackPosition - slideWidth - spaceWidth;
      slideIndex += 1;

      if (sliderElement.querySelector(".js--counter")) {
        currentCountEl.textContent = slideIndex + showSlides;
      }

      prevButton.disabled = false;

      if (slideIndex + showSlides === slideCount) {
        nextButton.disabled = true;
      }

      if (navDot) updateDots();

      updateslideTrackPosition();
    }
  }

  function updateNavButtonsState() {
    if (slideIndex + showSlides === showSlides) {
      prevButton.disabled = true;
      nextButton.disabled = false;
    } else if (slideIndex + showSlides === slideCount) {
      prevButton.disabled = false;
      nextButton.disabled = true;
    } else {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }

  // Проверка достижения крайних слайдов
  function checkFinalIndex(checkIndex) {
    if (
      checkIndex + showSlides > slideCount ||
      checkIndex + showSlides < showSlides
    ) {
      return 0;
    } else {
      return 1;
    }
  }

  // Обновление расстояния между слайдами
  function updateSpaceSlide() {
    spaceWidth = (slideTrackWidth - slideWidth * slideCount) / (slideCount - 1);
  }

  // Обновление позиции трека
  function updateslideTrackPosition() {
    slideTrack.style.left = slideTrackPosition + "px";
  }

  // Обновление размера слайда
  function updateslideWidth() {
    slideWidth = slides[1].clientWidth;
  }

  // Очистка точек
  function cleanDots() {
    navDot.innerHTML = "";
    restartSlider();
  }

  // Обновление активной точки
  function dotActivation() {
    navDot.querySelectorAll(".dot").forEach(function (item, index) {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }

      if (index === slideIndex) {
        item.classList.add("active");
      }
    });
  }

  function autoslide() {
    slideTrackPosition = -(slideIndex * slideWidth + slideIndex * spaceWidth);
    updateslideTrackPosition();
  }

  // Генерация точек
  function genDot(index) {
    const dot = document.createElement("div");
    const dotItem = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = index;
    dotItem.classList.add("dot__item");

    dot.addEventListener("click", function () {
      slideIndex = index;
      autoslide();
      updateNavButtonsState();
      dotActivation();
    });

    dot.appendChild(dotItem);
    navDot.appendChild(dot);
  }

  // Обновление навигации точек
  function updateDots() {
    if (sliderElement.querySelector(".js--dots-nav")) {
      navDot = sliderElement.querySelector(".js--dots-nav");
      navDot.style.display = "flex";

      if (sliderElement.querySelector(".js--dots-nav").innerHTML === "") {
        for (let i = 0; i < slideCount - showSlides + 1; i++) {
          genDot(i);
        }

        dotActivation();
      } else {
        dotActivation();
      }
    }
  }

  // Функция для обновления отображения слайдера
  function updateSlider() {
    if (sliderElement.classList.contains("js--mobile-only")) {
      if (window.innerWidth <= 1225) {
        navigation.style.display = "flex";
        slideTrack.style.position = "relative";
      } else {
        navigation.style.display = "none";
        slideTrack.style.position = "";
        slideTrack.style.left = "unset";
      }
    }

    updateSpaceSlide();
    updateslideWidth();
    updateslideTrackPosition();

    slideTrackWidth = slideTrack.scrollWidth;
    showSlides = Math.round(sliderElement.clientWidth / slideWidth);

    if (earlyShowSlides !== showSlides) {
      cleanDots();
      updateDots();
      earlyShowSlides = showSlides;
    }

    autoslide();

    if (sliderElement.querySelector(".js--counter")) {
      currentCountEl.innerText = slideIndex + showSlides;
      totalCountEl.innerText = slideCount;
    }
  }

  // Инициализация слайдера
  updateSlider();

  // Start loop
  if (loop === true) loopSlider(4000);

  window.addEventListener(
    "resize",
    function (event) {
      updateSlider();
    },
    true
  );
}

function init() {
  const sliders = document.querySelectorAll(".js--slider");

  sliders.forEach((element) => {
    element.getAttribute("data-loop") === "loop"
      ? initSlider(element, true)
      : initSlider(element);
  });
}

window.onload = () => {
  init();
};

window.addEventListener(
  "resize",
  function () {
    opt.screenWidth = window.screen.width;
  },
  true
);
