
// DOM Elements
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

document.addEventListener("DOMContentLoaded", () => {
   // Typing Effect
   const text = "Delicious Bites!";
   let index = 0;
   function typeText() {
       if (index < text.length) {
           document.getElementById("typing-text").textContent += text.charAt(index);
           index++;
           setTimeout(typeText, 100);
       }
   }
   typeText();

   // Menu Filtering
   document.querySelectorAll(".filter-btn").forEach(button => {
       button.addEventListener("click", function () {
           const category = this.getAttribute("data-category");
           document.querySelectorAll(".menu-item").forEach(item => {
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
 
});
