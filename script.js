// Welcome message
window.onload = function () {
    alert("Welcome to Travel & Tourism! ✈️🌍");
};

// Explore destination
function showMessage(place) {
    alert("You selected " + place + "!");
}

// Book trip
function bookTrip() {
    alert("Thank you! Your trip booking request has been received. ✈️");
}

// Contact form
function contactUs() {
    let name = document.querySelector(".contact-form input[type='text']").value;
    let email = document.querySelector(".contact-form input[type='email']").value;
    let message = document.querySelector(".contact-form textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the details.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully. 😊");

    // Clear the form
    document.querySelector(".contact-form").reset();
}