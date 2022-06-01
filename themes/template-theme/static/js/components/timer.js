function getTime(endtime) {
    var time    = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours   = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days    = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initTimerElem(endtime) {
    let clock       = document.querySelector('.timer');
    // let daysSpan = clock.querySelector('.days');
    let hoursSpan   = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let time = getTime(endtime);

        // daysSpan.innerHTML      = time.days;
        hoursSpan.innerHTML     = ('0' + time.hours).slice(-2);
        minutesSpan.innerHTML   = ('0' + time.minutes).slice(-2);
        secondsSpan.innerHTML   = ('0' + time.seconds).slice(-2);

        if (time.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    // Обновление счётчика
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

// let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer

// Конец текущего дня
let now = new Date();
let deadline = new Date(now.setHours(23,59,59,999));

// Инициализация таймера
initTimerElem(deadline);
