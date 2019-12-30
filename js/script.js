let bars = document.querySelector(".bars");
let nav = document.querySelector(".menu nav");
let links = document.querySelectorAll(".menu nav a");
let services = document.getElementById("services-wrap");

bars.addEventListener("click", function() {
  nav.classList.toggle("open-nav");
  bars.classList.toggle("cross");
});
window.addEventListener("resize", function() {
  nav.classList.remove("open-nav");
  bars.classList.remove("cross");
});
links.forEach(function(link) {
  link.addEventListener("click", function() {
    nav.classList.remove("open-nav");
    bars.classList.remove("cross");
  });
});

//array
let content = [
  {
    imgUrl:
      "https://www.abacoadvisers.com/sites/default/files/styles/news_main/public/nodes/images/renting-car-spain.jpg?itok=PfpIJyKo",
    title: "Car Rental",
    body: `Unique and varied rental services as follows:
  1- Car rental for foreign and local organizations, institutions, companies and ministries.
  2- Car rental for businessmen and VIPs.
  3- Annual, monthly, weekly and daily rentals.
  4- Renting limousines for weddings and events.`
  },
  {
    imgUrl:
      "https://www.theselfemployed.com/wp-content/uploads/2016/09/car-insurance.jpg",
    title: "Insurance",
    body:
      "The company is committed to insuring all of its cars through the largest insurance companies in the country"
  },
  {
    imgUrl:
      "https://blg.imgix.net/https%3A%2F%2Fwww.blg-logistics.com%2Fdam%2Fjcr%3Aa8b8e738-2800-4fe6-875c-32a112359801%2Fautomobiletransport_porsche.jpg?auto=format%2Ccompress&ixlib=java-1.1.1&w=1920&s=44f2874376d29437c0b4a3a702cf6dfb",
    title: "Car Rental",
    body: `Unique and varied rental services as follows:
  1- Car rental for foreign and local organizations, institutions, companies and ministries.
  2- Car rental for businessmen and VIPs.
  3- Annual, monthly, weekly and daily rentals.
  4- Renting limousines for weddings and events.`
  },
  {
    imgUrl:
      "https://lavipcarservice.com/wp-content/uploads/2018/11/why-Corporate-Accounts-Business-Travel-With-Luxury-Cars-Service.jpg",
    title: "Insurance",
    body:
      "The company is committed to insuring all of its cars through the largest insurance companies in the country"
  }
];

content.forEach(function(item) {
  let div = document.createElement("div");
  div.className = "service-card";
  let img = document.createElement("img");
  img.src = item.imgUrl;
  let article = document.createElement("article");
  let title = document.createElement("h3");
  title.innerHTML = item.title.slice(0, 30);
  let body = document.createElement("p");
  body.innerHTML = item.body;
  article.appendChild(title);
  article.appendChild(body);
  div.appendChild(img);
  div.appendChild(article);
  services.appendChild(div);
});
