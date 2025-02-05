document.addEventListener('DOMContentLoaded', function() {
   const hamburger = document.getElementById('hamburger');
   const navMenu = document.getElementById('nav-menu');

   // Add click event to the hamburger button
   hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu
   });
});
