// variables
const sendBtn = document.getElementById('sendBtn');


// Event Listners

eventListners();

function eventListners() {
    // App Init
    document.addEventListener('DOMContentLoaded', appInit);
}



// Functions

// App Initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}
