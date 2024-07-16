---
title: "Подключение шрифтов"
date: 2024-07-16T15:49:29+03:00
author: "Apol"
draft: false
---

<link rel="stylesheet" href="./style.css">

## Подключение шрифтов {id="include-fonts"}

Если в наборе есть не все форматы, их можно получить перекодировкой с помощью сервисов:

[Online @font-face generator](https://transfonter.org/) - Конвертирует шрифты и возвращает архив с готовыми стилями @font-face

Другие конвертеры: [convertio.co](https://convertio.co/ru/ttf-woff/)

# Форматы шрифтов

**TTF/OTF** – работают в большинстве браузеров, кроме IE.

**EOT** – создан Microsoft, представляет сжатую копию шрифта TTF, поддерживается только в IE.

**WOFF** – формат представляет собой сжатый шрифт в формате TTF/OTF.

**WOFF2** – имеет улучшенное сжатие, по сравнению с первой версией.

Как видно нет единого формата, который поддерживается всеми браузерами, поэтому нужно делать подключение нескольких файлов, браузер сам выберет подходящий формат. Рекомендуется подключать файлы шрифтов по приоритету:

- **WOFF2** для современных браузеров.
- **WOFF** для браузеров, которые не поддерживают WOFF2.
- **TTF/OTF** для устаревших браузерах
- **EOT** для поддержки IE.

**Принято хранить и подключать шрифты в форматах WOFF, WOFF2, SVG!!!**

Подключение происходит через директиву `@font-face` (инфо https://doka.guide/css/font-face/)

```css
@font-face {
	font-family: 'Roboto';
	src: local('Roboto'),
		local('Roboto Regular'),
		local('Roboto-Regular'),
		url('Roboto/Roboto-Regular.woff2') format('woff2'),
		url('Roboto/Roboto-Regular.woff') format('woff'),
		url('Roboto/Roboto-Regular.svg') format('svg'),
		url('Roboto/Roboto-Regular.ttf') format('ttf'),
		url('Roboto/Roboto-Regular.otf') format('otf'),
		url('Roboto/Roboto-Regular.eot') format('eot');
	font-style: normal;
	font-weight: 400;
	font-display: swap;
}

body {
	font-family: 'Roboto', sans-serif;
}
```

В качестве одного или нескольких значений у свойства `src` можно указать конструкцию `local("имя-шрифта-в-системе")`. Нужно указывать локальные названия до ссылок на внешние файлы, чтобы браузер, найдя шрифт в системе под таким именем, даже не пошёл загружать и читать внешние файлы.

### Font-display

Определяет поведение текста во время загрузки шрифта.

- `auto` — поведение по умолчанию, зависит от браузера.
- `block` — текст не отображается в течение короткого периода (3 секунды), затем отрисовывается запасной шрифт, если основной ещё не загрузился. Как только загрузка завершается, текст перерисовывается снова.
- `swap` — сразу же отрисовывается запасной шрифт, после загрузки шрифта — повторный рендеринг.
- `fallback` — в течение очень короткого периода (100 миллисекунд) не отображается ничего, затем браузер использует запасной шрифт и ждёт 3 секунды — если шрифт всё ещё не загрузился, остаётся запасной шрифт. Далее не важно, загрузился шрифт или нет, замена не произойдёт. Если шрифт загрузится, то он применится только при обновлении страницы.
- `optional` — текст не отображается в течение 100 миллисекунд, а затем отрисовывается запасным шрифтом. Даже если шрифт загрузится после этого, замена произойдёт только при обновлении страницы.

**Приоритетно используется `swap`!!!**

# Начертания шрифта

На сайте может использоваться один и тот же шрифт, но в разных начертаниях. Например, жирный `font-weight: bold` или курсив `font-style: italic`. В этом случае вам нужно будет подключить разные файлы, содержащие эти начертания.

| Название | font-weight | font-weight (text) |
| --- | --- | --- |
| Thin (Hair) | 100 |  |
| Extra Light (Ultra Light) | 200 |  |
| Light | 300 |  |
| Regular (Normal) | 400 | normal |
| Medium | 500 |  |
| Semi Bold (Demi Bold) | 600 | bold |
| Bold | 700 |  |
| Extra Bold (Ultra Bold) | 800 |  |
| Black (Heavy) | 900 |  |

```css
@font-face {
	font-family: 'Roboto';
	src: local('Roboto Black'),
		local('Roboto-Black'),
		url('Roboto/Roboto-Black.woff2') format('woff2'),
		url('Roboto/Roboto-Black.woff') format('woff'),
		url('Roboto/Roboto-Black.svg') format('svg'),
		url('Roboto/Roboto-Black.ttf') format('ttf'),
		url('Roboto/Roboto-Black.otf') format('otf'),
		url('Roboto/Roboto-Black.eot') format('eot');
	font-style: normal;
	font-weight: 900;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Black Italic'),
		local('Roboto BlackItalic'),
		local('Roboto-BlackItalic'),
		local('Roboto-Black-Italic'),
		url('Roboto/Roboto-BlackItalic.woff2') format('woff2'),
		url('Roboto/Roboto-BlackItalic.woff') format('woff'),
		url('Roboto/Roboto-BlackItalic.svg') format('svg'),
		url('Roboto/Roboto-BlackItalic.ttf') format('ttf'),
		url('Roboto/Roboto-BlackItalic.otf') format('otf'),
		url('Roboto/Roboto-BlackItalic.eot') format('eot');
	font-style: italic;
	font-weight: 900;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Bold'),
		local('Roboto-Bold'),
		url('Roboto/Roboto-Bold.woff2') format('woff2'),
		url('Roboto/Roboto-Bold.woff') format('woff'),
		url('Roboto/Roboto-Bold.svg') format('svg'),
		url('Roboto/Roboto-Bold.ttf') format('ttf'),
		url('Roboto/Roboto-Bold.otf') format('otf'),
		url('Roboto/Roboto-Bold.eot') format('eot');
	font-style: normal;
	font-weight: 700;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Bold Italic'),
		local('Roboto BoldItalic'),
		local('Roboto-BoldItalic'),
		local('Roboto-Bold-Italic'),
		url('Roboto/Roboto-BoldItalic.woff2') format('woff2'),
		url('Roboto/Roboto-BoldItalic.woff') format('woff'),
		url('Roboto/Roboto-BoldItalic.svg') format('svg'),
		url('Roboto/Roboto-BoldItalic.ttf') format('ttf'),
		url('Roboto/Roboto-BoldItalic.otf') format('otf'),
		url('Roboto/Roboto-BoldItalic.eot') format('eot');
	font-style: italic;
	font-weight: 700;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Medium'),
		local('Roboto-Medium'),
		url('Roboto/Roboto-Medium.woff2') format('woff2'),
		url('Roboto/Roboto-Medium.woff') format('woff'),
		url('Roboto/Roboto-Medium.svg') format('svg'),
		url('Roboto/Roboto-Medium.ttf') format('ttf'),
		url('Roboto/Roboto-Medium.otf') format('otf'),
		url('Roboto/Roboto-Medium.eot') format('eot');
	font-style: normal;
	font-weight: 500;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Medium Italic'),
		local('Roboto MediumItalic'),
		local('Roboto-MediumItalic'),
		local('Roboto-Medium-Italic'),
		url('Roboto/Roboto-MediumItalic.woff2') format('woff2'),
		url('Roboto/Roboto-MediumItalic.woff') format('woff'),
		url('Roboto/Roboto-MediumItalic.svg') format('svg'),
		url('Roboto/Roboto-MediumItalic.ttf') format('ttf'),
		url('Roboto/Roboto-MediumItalic.otf') format('otf'),
		url('Roboto/Roboto-MediumItalic.eot') format('eot');
	font-style: italic;
	font-weight: 500;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto'),
		local('Roboto Regular'),
		local('Roboto-Regular'),
		url('Roboto/Roboto-Regular.woff2') format('woff2'),
		url('Roboto/Roboto-Regular.woff') format('woff'),
		url('Roboto/Roboto-Regular.svg') format('svg'),
		url('Roboto/Roboto-Regular.ttf') format('ttf'),
		url('Roboto/Roboto-Regular.otf') format('otf'),
		url('Roboto/Roboto-Regular.eot') format('eot');
	font-style: normal;
	font-weight: 400;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Italic'),
		local('Roboto-Italic'),
		local('Roboto Regular Italic'),
		local('Roboto RegularItalic'),
		local('Roboto-RegularItalic'),
		local('Roboto-Regular-Italic'),
		url('Roboto/Roboto-RegularItalic.woff2') format('woff2'),
		url('Roboto/Roboto-RegularItalic.woff') format('woff'),
		url('Roboto/Roboto-RegularItalic.svg') format('svg'),
		url('Roboto/Roboto-RegularItalic.ttf') format('ttf'),
		url('Roboto/Roboto-RegularItalic.otf') format('otf'),
		url('Roboto/Roboto-RegularItalic.eot') format('eot');
	font-style: italic;
	font-weight: 400;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto'),
		local('Roboto Light'),
		local('Roboto-Light'),
		url('Roboto/Roboto-Light.woff2') format('woff2'),
		url('Roboto/Roboto-Light.woff') format('woff'),
		url('Roboto/Roboto-Light.svg') format('svg'),
		url('Roboto/Roboto-Light.ttf') format('ttf'),
		url('Roboto/Roboto-Light.otf') format('otf'),
		url('Roboto/Roboto-Light.eot') format('eot');
	font-style: normal;
	font-weight: 300;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Light Italic'),
		local('Roboto LightItalic'),
		local('Roboto-LightItalic'),
		local('Roboto-Light-Italic'),
		url('Roboto/Roboto-LightItalic.woff2') format('woff2'),
		url('Roboto/Roboto-LightItalic.woff') format('woff'),
		url('Roboto/Roboto-LightItalic.svg') format('svg'),
		url('Roboto/Roboto-LightItalic.ttf') format('ttf'),
		url('Roboto/Roboto-LightItalic.otf') format('otf'),
		url('Roboto/Roboto-LightItalic.eot') format('eot');
	font-style: italic;
	font-weight: 300;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto'),
		local('Roboto Thin'),
		local('Roboto-Thin'),
		url('Roboto/Roboto-Thin.woff2') format('woff2'),
		url('Roboto/Roboto-Thin.woff') format('woff'),
		url('Roboto/Roboto-Thin.svg') format('svg'),
		url('Roboto/Roboto-Thin.ttf') format('ttf'),
		url('Roboto/Roboto-Thin.otf') format('otf'),
		url('Roboto/Roboto-Thin.eot') format('eot');
	font-style: normal;
	font-weight: 100;
	font-display: swap;
}

@font-face {
	font-family: 'Roboto';
	src: local('Roboto Thin Italic'),
		local('Roboto ThinItalic'),
		local('Roboto-ThinItalic'),
		url('Roboto/Roboto-ThinItalic.woff2') format('woff2'),
		url('Roboto/Roboto-ThinItalic.woff') format('woff'),
		url('Roboto/Roboto-ThinItalic.svg') format('svg'),
		url('Roboto/Roboto-ThinItalic.ttf') format('ttf'),
		url('Roboto/Roboto-ThinItalic.otf') format('otf'),
		url('Roboto/Roboto-ThinItalic.eot') format('eot');
	font-style: italic;
	font-weight: 100;
	font-display: swap;
}

body {
	font-family: 'Roboto', sans-serif;
}

h1 {
	font-weight: bold;
}

h2 {
	font-style: italic;
}

/* Font Family - Roboto */

.ff-roboto--black {
	font-weight: 900;
}

.ff-roboto--black-italic {
	font-weight: 900;
	font-style: italic;
}

.ff-roboto--Bold {
	font-weight: 700;
}

.ff-roboto--Bold-italic {
	font-weight: 700;
	font-style: italic;
}

.ff-roboto--medium {
	font-weight: 500;
}

.ff-roboto--medium-italic {
	font-weight: 500;
	font-style: italic;
}

.ff-roboto--regular {
	font-weight: 400;
}

.ff-roboto--regular-italic {
	font-weight: 400;
	font-style: italic;
}

.ff-roboto--light {
	font-weight: 300;
}

.ff-roboto--light-italic {
	font-weight: 300;
	font-style: italic;
}

.ff-roboto--thin {
	font-weight: 100;
}

.ff-roboto--thin-italic {
	font-weight: 100;
	font-style: italic;
}
```

## Ещё больше нюансов

[Как подключить и оптимизировать нестандартные шрифты](https://htmlacademy.ru/blog/html/fonts-loading)

[Как установить стиль шрифта. CSS-свойство font](https://htmlacademy.ru/blog/css/css-font)

## Пример

### Подзаголовок
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic animi aut facilis ullam iure distinctio, saepe libero nihil voluptatum iusto. Error minima, illum ducimus sequi laudantium inventore quisquam odit.</p>

<h2 class="ff-roboto--regular">Начертание текста</h2>
<p class="ff-roboto--black">900 - Roboto-Black</p>
<p class="ff-roboto--black-italic">900 - Roboto-BlackItalic</p>
<p class="ff-roboto--Bold">700 - Roboto-Bold</p>
<p class="ff-roboto--Bold-italic">700 - Roboto-BoldItalic</p>
<p class="ff-roboto--medium">500 - Roboto-Medium</p>
<p class="ff-roboto--medium-italic">500 - Roboto-MediumItalic</p>
<p class="ff-roboto--regular">400 - Roboto-Regular</p>
<p class="ff-roboto--regular-italic">400 - Roboto-RegularItalic</p>
<p class="ff-roboto--light">300 - Roboto-Light</p>
<p class="ff-roboto--light-italic">300 - Roboto-LightItalic</p>
<p class="ff-roboto--thin">100 - Roboto-Thin</p>
<p class="ff-roboto--thin-italic">100 - Roboto-ThinItalic</p>

<h2 class="ff-ttruns-trial--regular">Font Family - TT Runs Trial</h2>
<p class="ff-ttruns-trial--black">900 - TT Runs Trial Black</p>
<p class="ff-ttruns-trial--black-italic">900 - TT Runs Trial Black Italic</p>
<p class="ff-ttruns-trial--extra-bold">800 - TT Runs Trial ExtraBold</p>
<p class="ff-ttruns-trial--extra-bold-italic">800 - TT Runs Trial ExtraBold Italic</p>
<p class="ff-ttruns-trial--bold">700 - TT Runs Trial Bold</p>
<p class="ff-ttruns-trial--bold-italic">700 - TT Runs Trial Bold Italic</p>
<p class="ff-ttruns-trial--regular">400 - TT Runs Trial Regular</p>
<p class="ff-ttruns-trial--italic">400 - TT Runs Trial Italic</p>
<p class="ff-ttruns-trial--light">300 - TT Runs Trial Light</p>
<p class="ff-ttruns-trial--light-italic">300 - TT Runs Trial Light Italic</p>
<p class="ff-ttruns-trial--extra-light">200 - TT Runs Trial ExtraLight</p>
<p class="ff-ttruns-trial--extra-light-italic">200 - TT Runs Trial ExtraLight Italic</p>
<p class="ff-ttruns-trial--thin">100 - TT Runs Trial Thin</p>
<p class="ff-ttruns-trial--thin-italic">100 - TT Runs Trial Thin Italic</p>

<h2 class="ff-ttruns-outline--black">Font Family - TT Runs Black Outline</h2>
<p class="ff-ttruns-outline--black">900 - TT Runs Black Outline</p>
<p class="ff-ttruns-outline--black-italic">900 - TT Runs Black Outline Italic</p>

<h2 class="ff-ttruns-variable--roman">Font Family - TT Runs Trial Variable Roman</h2>
<p class="ff-ttruns-variable--roman">400 - TT Runs Trial Variable Roman</p>
<p class="ff-ttruns-variable--roman-italic">400 - TT Runs Trial Variable Roman Italic</p>
