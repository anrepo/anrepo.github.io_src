let progressCircle = (function() {

    const circle = document.querySelector('.progress-circle .progress');
    const radius = circle.r.baseVal.value;      // радиус
    const circumference = 2 * Math.PI * radius; // длина окружности

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    console.log(circumference);

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    

    return {
        init: init,
        setProgress: setProgress
    }

})();

export {progressCircle}