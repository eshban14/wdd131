
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
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");

        // Get the category to filter
        const category = button.getAttribute("data-category");

        // Filter menu items
        menuItems.forEach((item) => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    
});

document.addEventListener("DOMContentLoaded", () => {
   const lastModifiedElement = document.getElementById("lastModified");
   if (lastModifiedElement) {
     lastModifiedElement.textContent = document.lastModified;
   }
 });