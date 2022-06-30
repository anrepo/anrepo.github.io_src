const submitBtn = document.querySelector('.form-submit');
const form = document.querySelector('.feedback-form');

let requiredElems;

submitBtn.addEventListener("click", () => {
    let name = document.querySelector('input#name').value;
    let email = document.querySelector('input#email').value;
    let body = document.querySelector('textarea#body').value;
    let subject = `Feedback "anrepo.github.io" by ${name}, mail: ${email}`;
    window.open(`mailto:andrey.polenok@gmail.com?subject=${subject}&from=${email}&body=${body}`);
})

function preparationForm() {
    let formElems = form.querySelectorAll('input, textarea, select');
    console.log(formElems);

    for (let i = 0; i <= formElems.length; i++) {
        if (formElems[i].required) requiredElems.push(formElems[i]);
    }

    // console.log(requiredElems);
}

// function validateForm() {
    
// }