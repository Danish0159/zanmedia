//  Variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const website = document.getElementById('website');
const products = document.getElementById('products');
const message = document.getElementById('message');

// All Functions
// Function to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}

// Function to check if required fields have data.
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            console.log(input.id);
            showError(input, `${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an event listener for the form on submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, website, products, message]);
    checkEmail(email);

    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "multipart/form-data" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
})
