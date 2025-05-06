// This array will store your image paths
// You can replace these with actual paths to your photos
const memories = [
    "/images/memory1.jpg",
    "/images/memory2.jpg",
    "/images/memory3.jpg",
    "/images/memory4.jpg",
    "/images/memory5.jpg"
  ];
  
  // If you don't have actual images yet, you can use placeholders
  const placeholderMemories = [
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600"
  ];
  
  let currentSlideIndex = 0;
  let slideshowInterval;
  
  // Function to open the memories modal
  function openMemoriesModal() {
    const modal = document.getElementById("memories-modal");
    const slideshowContainer = document.getElementById("slideshow-container");
    const slideshowDots = document.getElementById("slideshow-dots");
    
    // Clear previous content
    slideshowContainer.innerHTML = "";
    slideshowDots.innerHTML = "";
    
    // Add images to slideshow
    const imagesToUse = memories.length > 0 ? memories : placeholderMemories;
    
    imagesToUse.forEach((src, index) => {
      // Create image element
      const img = document.createElement("img");
      img.src = src;
      img.className = "slideshow-image";
      if (index === 0) img.classList.add("active");
      slideshowContainer.appendChild(img);
      
      // Create dot element
      const dot = document.createElement("div");
      dot.className = "dot";
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(index);
      });
      slideshowDots.appendChild(dot);
    });
    
    // Show modal with fade-in effect
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
    
    // Start automatic slideshow
    startSlideshow();
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  }
  
  // Function to close the memories modal
  function closeMemoriesModal() {
    const modal = document.getElementById("memories-modal");
    
    // Hide modal with fade-out effect
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
    
    // Stop automatic slideshow
    stopSlideshow();
    
    // Allow body scrolling again
    document.body.style.overflow = "auto";
  }
  
  // Function to start automatic slideshow
  function startSlideshow() {
    stopSlideshow(); // Clear any existing interval
    slideshowInterval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds
  }
  
  // Function to stop automatic slideshow
  function stopSlideshow() {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
    }
  }
  
  // Function to go to the next slide
  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }
  
  // Function to go to the previous slide
  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }
  
  // Close modal when clicking outside of it
  document.addEventListener('click', function(event) {
    const modal = document.getElementById('memories-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (modal.classList.contains('show') && 
        !modalContent.contains(event.target) && 
        !event.target.classList.contains('memories-btn')) {
      closeMemoriesModal();
    }
  });
  function goToSlide(index) {
    const slides = document.querySelectorAll(".slideshow-image");
    const dots = document.querySelectorAll(".dot");
    
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }
    
    // Hide all slides and deactivate all dots
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    
    dots.forEach(dot => {
      dot.classList.remove("active");
    });
    
    // Show current slide and activate current dot
    slides[currentSlideIndex].classList.add("active");
    dots[currentSlideIndex].classList.add("active");
    
    // Reset slideshow timer
    startSlideshow();
  }
  
  // Function to go