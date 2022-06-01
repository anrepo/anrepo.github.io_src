const ratingValueDefault = 3.5;

const ratings = document.querySelectorAll('.stars-rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {

    let ratingProgress, ratingValue;

    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingProgressWidth();

        // если стоит класс 'stars-rating__set',
        // даем возможность ставить свой рейтинг
        if (rating.classList.contains('stars-rating__set')) {
            setRating(rating);
        }
    }


    // указание оценки
    function setRating(rating) {

        const ratingItems = rating.querySelectorAll('.rating__item');

        for (let i = 0; i < ratingItems.length; i++) {
            const ratingItem = ratingItems[i];

            ratingItem.addEventListener("mouseenter", function(e) {
                initRatingVars(rating);
                setRatingProgressWidth(ratingItem.value);

                ratingProgress.classList.add('active');
            });

            ratingItem.addEventListener("mouseleave", function(e) {
                setRatingProgressWidth();
                ratingProgress.classList.remove('active');
            });

            ratingItem.addEventListener("click", function(e) {
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    setRatingValue(rating.value, rating);
                } else {
                    ratingValue = ratingItem.value;
                    setRatingProgressWidth();
                }
            });
        }
    }

    function initRatingVars(rating) {
        ratingProgress = rating.querySelector('.rating__progress');
        ratingValue = ratingValueDefault;
    }

    function setRatingProgressWidth(index = ratingValue) {
        const ratingProgressWidth = index / 0.05;
        ratingProgress.style.width = `${ratingProgressWidth}%`;
    }

}