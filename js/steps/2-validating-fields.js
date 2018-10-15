// variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');


// Event Listners

eventListners();

function eventListners() {
    // App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // validate form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    // this means = all these fields
}



// Functions

// App Initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}

// validate the fields
function validateField() {
    // console.log('From ValidateField');

    let errors;

    // validate the length of the field
    validateLength(this)
}
