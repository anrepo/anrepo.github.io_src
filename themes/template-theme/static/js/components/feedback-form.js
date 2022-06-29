const submitBtn = document.querySelector('.form-submit');

submitBtn.addEventListener("click", () => {
    let name = document.querySelector('input#name').value;
    // console.log(name);

    let email = document.querySelector('input#email').value;
    // console.log(email);

    let body = document.querySelector('textarea#body').value;
    // console.log(body);

    let subject = `Feedback from "anrepo.github.io" by ${name}`;
    // console.log(subject);

    window.open(`mailto:andrey.polenok@gmail.com?subject=${subject}&mail=${email}&body=${body}`);
})
