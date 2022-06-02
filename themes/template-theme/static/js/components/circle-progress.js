let progressCircle = (function() {

    let circles = {};

    class Circle {
        constructor(element, name) {
            this.name = name;
            this.percent = 0;
            this.element = element;
            this.radius = element.r.baseVal.value;
            this.circumference = 2 * Math.PI * this.radius;
            this.element.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
            this.element.style.strokeDashoffset = this.circumference;
        }

        setProgress(percent) {
            this.percent = percent;
            this.element.style.strokeDashoffset = this.circumference - percent / 100 * this.circumference;
        }
    }

    function init() {
        const circlesProgress = document.querySelectorAll('.progress-circle');

        for (let item of circlesProgress) {
            const itemProgress = item.querySelector('.progress');
            const itemName = item.getAttribute("data-skill");

            circles[itemName] = new Circle(itemProgress, itemName);
        }
    }
    

    return {
        init: init,
        circles: circles
    }

})();

export {progressCircle}