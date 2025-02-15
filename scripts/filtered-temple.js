
const temples = [
   {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
   },
   {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
   },
   {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
   },
   {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
   },
   {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
   },
   {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
   },
   {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
         "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
   },
   {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40000,
      imageUrl:
         "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/3RHCSLWZOFD7ZGPHQEMZPGVP5Y.JPG",
   },
   {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 25",
      area: 72000,
      imageUrl:
         "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/1280%2C/0/default",
   },
   {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2021, August, 29",
      area: 22000,
      imageUrl:
         "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/LT2M6KFPDJZE52Q4NXIASWTCNQ.jpg",
   },
];


const templeContainer = document.querySelector("#temple-cards");
const navLinks = document.querySelectorAll("#nav-menu a");
const pageTitle = document.querySelector("#page-title");


function createTempleCard(temple) {
   const card = document.createElement("div");
   card.classList.add("temple-card");

   card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
   `;

   return card;
}


function displayTemples(templesArray) {
   templeContainer.innerHTML = ""; 
   templesArray.forEach((temple) => {
      const card = createTempleCard(temple);
      templeContainer.appendChild(card);
   });
}


function filterOld() {
   return temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNew() {
   return temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLarge() {
   return temples.filter((temple) => temple.area > 90000);
}

function filterSmall() {
   return temples.filter((temple) => temple.area < 10000);
}


navLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.id;

      let filteredTemples = [];
      switch (filter) {
         case "old":
            filteredTemples = filterOld();
            pageTitle.textContent = "Old Temples";
            break;
         case "new":
            filteredTemples = filterNew();
            pageTitle.textContent = "New Temples";
            break;
         case "large":
            filteredTemples = filterLarge();
            pageTitle.textContent = "Large Temples";
            break;
         case "small":
            filteredTemples = filterSmall();
            pageTitle.textContent = "Small Temples";
            break;
         default:
            filteredTemples = temples; 
            pageTitle.textContent = "Home";
      }

      displayTemples(filteredTemples);
   });
});


displayTemples(temples);


document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
   navMenu.classList.toggle("active");
});


navMenu.addEventListener("click", () => {
   navMenu.classList.remove("active");
});