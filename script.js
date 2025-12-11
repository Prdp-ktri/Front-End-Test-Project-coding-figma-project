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
      <p class="store-location">
      <span class="icon-wrap">
      <i class="fas fa-map-marker-alt"></i></span>${store.city}</p>
      <p class="store-address">${store.address}</p>
      <hr>
      <p class="store-phone">${store.phone}</p>
    </div>
  </div>
`
  )
  .join("");

const series = [
  { title: "Steel Series", image: "assets/series1.jpg" },
  { title: "Carving Series", image: "assets/series2.jpg" },
  { title: "Linear Series", image: "assets/series3.jpg" },
  { title: "Color Series", image: "assets/series4.jpg" },
  { title: "Glue & Gliter Series", image: "assets/series5.jpg" },
  { title: "Bookmatch Series", image: "assets/series6.jpg" },
  { title: "Stoney Series", image: "assets/series7.jpg" },
  { title: "Lacqure Series", image: "assets/series8.jpg" },
];

document.getElementById("ps-grid").innerHTML = series
  .map(
    (item) => `
    <div class="ps-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="ps-glass"></div>
      <div class="ps-title">${item.title}</div>
    </div>
  `
  )
  .join("");

// Simple counter animation for the two stats
(function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  const duration = 1500; // ms
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target") || 0;
    let start = 0;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      counter.textContent =
        current + (target >= 10 && progress === 1 ? "+" : "");
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // ensure final display: "10+" and "100+"
        counter.textContent = target >= 10 ? target + "+" : target;
      }
    }
    requestAnimationFrame(step);
  });
})();

// Small keyboard accessibility for CTA
document.getElementById("learn-more").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    e.target.click();
  }
});

// (Optional) hook: smooth scroll on CTA click (point to '#')
document.getElementById("learn-more").addEventListener("click", function (e) {
  // Replace `#` with real target
  // document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  // For demo: simply log
  console.log("Learn More clicked");
});

document.querySelector(".wp-btn").addEventListener("mouseenter", function () {
  this.style.opacity = "0.95";
});

document.querySelector(".wp-btn").addEventListener("mouseleave", function () {
  this.style.opacity = "1";
});
