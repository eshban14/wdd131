
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle Mobile Menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close Menu When a Link is Clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});



// DOM Elements
const reservationForm = document.getElementById("reservationForm");
const confirmationMessage = document.getElementById("confirmationMessage");

// Function to handle form submission
reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const persons = document.getElementById("persons").value;

    // Validate form inputs
    if (!name || !email || !date || !time || !persons) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a reservation object
    const reservation = {
        name: name,
        email: email,
        date: date,
        time: time,
        persons: persons,
    };

    // Save reservation to localStorage
    localStorage.setItem("reservation", JSON.stringify(reservation));

    // Display confirmation message
    confirmationMessage.textContent = `Thank you, ${name}! Your reservation for ${persons} persons on ${date} at ${time} has been confirmed.`;
    confirmationMessage.style.color = "#388e3c"; // Green color for success message

    // Clear the form
    reservationForm.reset();
});

// Function to load reservation data from localStorage (optional)
function loadReservation() {
    const savedReservation = localStorage.getItem("reservation");
    if (savedReservation) {
        const reservation = JSON.parse(savedReservation);
        document.getElementById("name").value = reservation.name;
        document.getElementById("email").value = reservation.email;
        document.getElementById("date").value = reservation.date;
        document.getElementById("time").value = reservation.time;
        document.getElementById("persons").value = reservation.persons;
    }
}
document.addEventListener("DOMContentLoaded", () => {
   const lastModifiedElement = document.getElementById("lastModified");
   if (lastModifiedElement) {
     lastModifiedElement.textContent = document.lastModified;
   }
 });
// Load reservation data when the page loads
window.addEventListener("load", loadReservation);