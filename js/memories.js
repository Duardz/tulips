// Dynamically generate memory image paths
const memories = Array.from({ length: 11 }, (_, i) => `../images/m${i + 1}.jpg`);

let currentSlideIndex = 0;
let slideshowInterval;

// Update the openMemoriesModal function
function openMemoriesModal() {
  const modal = document.getElementById("memories-modal");
  const slideshowContainer = document.getElementById("slideshow-container");
  const slideshowDots = document.getElementById("slideshow-dots");

  // Clear existing content
  slideshowContainer.innerHTML = "";
  slideshowDots.innerHTML = "";

  // Add images and dots
  memories.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "slideshow-image";
    img.alt = `Memory ${index + 1}`;
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      img.src = '../images/placeholder.jpg'; // Add a fallback image
    };
    
    if (index === 0) img.classList.add("active");
    slideshowContainer.appendChild(img);

    const dot = document.createElement("div");
    dot.className = "dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    slideshowDots.appendChild(dot);
  });

modal.style.display = "flex";
setTimeout(() => modal.classList.add("show"), 10);
startSlideshow();
document.body.style.overflow = "hidden";

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
  startSlideshow();
  document.body.style.overflow = "hidden";
}

function closeMemoriesModal() {
  const modal = document.getElementById("memories-modal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 400);
  stopSlideshow();
  document.body.style.overflow = "auto";
}

function startSlideshow() {
  stopSlideshow();
  slideshowInterval = setInterval(nextSlide, 4000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slideshow-image");
  const dots = document.querySelectorAll(".dot");

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
  startSlideshow();
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

document.addEventListener("click", function (event) {
  const modal = document.getElementById("memories-modal");
  const modalContent = document.querySelector(".modal-content");
  if (modal.classList.contains("show") &&
      !modalContent.contains(event.target) &&
      !event.target.classList.contains("memories-btn")) {
    closeMemoriesModal();
  }
});

document.addEventListener("keydown", function (event) {
  const modal = document.getElementById("memories-modal");
  if (modal.classList.contains("show")) {
    if (event.key === "Escape") closeMemoriesModal();
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".slideshow-nav");
  if (nav) {
    nav.addEventListener("mouseenter", stopSlideshow);
    nav.addEventListener("mouseleave", startSlideshow);
  }

  // Preload images
  memories.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
