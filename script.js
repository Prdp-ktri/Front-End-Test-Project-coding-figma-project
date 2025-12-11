// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});

const stores = [
  {
    image: "assets/store1.jpg",
    city: "Dewas, Madhya Pradesh",
    address:
      "80, Maksi Rd, Vrindavan Nagar Colony, Jamuna Nagar, Itawa, Dewas, 455001",
    phone: "097278 33336",
  },
  {
    image: "assets/store2.jpg",
    city: "Indore, Madhya Pradesh",
    address: "Dewas Naka, Lasudia Mori, Indore, 452012",
    phone: "097278 33337",
  },
  {
    image: "assets/store3.jpg",
    city: "Ujjain, Madhya Pradesh",
    address:
      "23, Shanti Vihar Colony, Mahakal Road, Keshav Nagar, Ujjain, 456010",
    phone: "097278 33338",
  },
];

const container = document.querySelector(".stores-grid");

container.innerHTML = stores
  .map(
    (store) => `
  <div class="store-card">
    <img src="${store.image}">
    <div class="store-info">
      <p class="store-location"><i class="fas fa-map-marker-alt"></i> ${store.city}</p>
      <p class="store-address">${store.address}</p>
      <hr>
      <p class="store-phone">${store.phone}</p>
    </div>
  </div>
`
  )
  .join("");
