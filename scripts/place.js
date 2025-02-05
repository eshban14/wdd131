function calculateWindChill(temp, windSpeed) {
   return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
 }

 document.addEventListener("DOMContentLoaded", function () {
   const temp = parseFloat(document.getElementById("temp").textContent);
   const wind = parseFloat(document.getElementById("wind").textContent);
   const windChillElement = document.getElementById("windChill");

   if (temp <= 10 && wind > 4.8) {
     windChillElement.textContent = calculateWindChill(temp, wind).toFixed(1);
   } else {
     windChillElement.textContent = "N/A";
   }

   document.getElementById("year").textContent = new Date().getFullYear();
   document.getElementById("lastModified").textContent = document.lastModified;
 });