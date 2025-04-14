// API FONTS NEEDS TO BE ADDED




// Navigation bar
// Best Seller
let NavBestSeller = document.getElementById('best-seller-container');
let NavBestSellerItems = document.getElementById('best-seller-items');
// Shop
let NavShop = document.getElementById('nav-shop-container');
let NavShopItem = document.getElementById('nav-shop-items');
// Customer Care
let NavCustomerCare = document.getElementById('customer-care-container');
let NavCustomerCareItem = document.getElementById('nav-customer-care-items');
// bag icon
let BagIcon = document.getElementById("bag-container");


// Best seller button hover
function navBestSellerScroll() {
    document.getElementById("bs-header").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        window.scrollBy(0, -50); // move up a bit
    }, 500); // Time 0.5 seconds
}
NavBestSeller.addEventListener("mouseenter", function() {
    this.style.textDecoration = "underline";
    NavBestSellerItems.style.display = "block";
});
NavBestSeller.addEventListener("mouseleave", function() {
    this.style.textDecoration = "transparent";
    NavBestSellerItems.style.display = "none"; 
});
// Shop button hover
NavShop.addEventListener("mouseenter", function() {
    this.style.textDecoration = "underline";
    NavShopItem.style.display = "block";
});
NavShop.addEventListener("mouseleave", function() {
    this.style.textDecoration = "transparent";
    NavShopItem.style.display = "none";
});
// Customer care button hover
NavCustomerCare.addEventListener("mouseenter", function() {
    this.style.textDecoration = "underline";
    NavCustomerCareItem.style.display = "block";
});
NavCustomerCare.addEventListener("mouseleave", function() {
    this.style.textDecoration = "transparent";
    NavCustomerCareItem.style.display = "none";
});
// Bag icon button
BagIcon.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#f8f8ffd2";
    this.style.borderRadius = "60px";
});
BagIcon.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "transparent";
});
//Home shop button hover
let shopButton = document.getElementById("shop-button");
shopButton.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "lightGray";
});
shopButton.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "transparent";
});



// prev next button
const bsImages = [ // array of images
    "Images/home-image2.png",
    "Images/home-image3.png",
    "Images/home-image.png"
];
const firstImage = 0;
const lastImage = bsImages.length - 1; // the index of images the 0,1,2 that why i -1 so it will be 2
let currentImage = 0;

// Next button
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', function () {
    const imageTag = document.getElementById('home-image');
    currentImage++;
    if (currentImage >= lastImage + 1) { // if the value of current image is greater than the last image it will go back to first image
        currentImage = 0;
    }
    imageTag.src = bsImages[currentImage]; 
});

// Previous button
const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', function () {
    const imageTag = document.getElementById('home-image');
    currentImage--;
    if (currentImage < firstImage) { // if the value of current image lower than 0 it will go back to the last image
        currentImage = lastImage;
    }
    imageTag.src = bsImages[currentImage];
});


// Best seller hover effects
let image1 = document.getElementById("bs-img1");
let image2 = document.getElementById("bs-img2");
let image3 = document.getElementById("bs-img3");
let img1Container = document.getElementById("bs-img1-container");
let img2Container = document.getElementById("bs-img2-container");
let img3Container = document.getElementById("bs-img3-container");

image1.addEventListener("mouseenter", function(){
    image2.style.filter = "blur(2px)";
    image3.style.filter = "blur(2px)";
    img1Container.style.transform = "scale(1.1)";
})
image1.addEventListener("mouseleave", function(){
    image2.style.filter = "none";
    image3.style.filter = "none";
    img1Container.style.transform = "scale(1)";
})
image2.addEventListener("mouseenter", function(){
    image1.style.filter = "blur(2px)";
    image3.style.filter = "blur(2px)";
    img2Container.style.transform = "scale(1.1)";
})
image2.addEventListener("mouseleave", function(){
    image1.style.filter = "none";
    image3.style.filter = "none";
    img2Container.style.transform = "scale(1)";
})
image3.addEventListener("mouseenter", function(){
    image1.style.filter = "blur(2px)";
    image2.style.filter = "blur(2px)";
    img3Container.style.transform = "scale(1.1)";
})
image3.addEventListener("mouseleave", function(){
    image1.style.filter = "none";
    image2.style.filter = "none";
    img3Container.style.transform = "scale(1)";
})


// Function to redirect to the product page with the product index
function goToProductPage(index) {
    window.location.href = `product.html?index=${index}`;
}

// video javascript code
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('centeredVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const muteBtn = document.getElementById('muteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
  
    // Play/Pause
    playPauseBtn.addEventListener('click', togglePlayPause);
    video.addEventListener('click', togglePlayPause);
  
    function togglePlayPause() {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚❚';
      } else {
        video.pause();
        playPauseBtn.textContent = '▶';
      }
    }
  
    // Progress Bar
    video.addEventListener('timeupdate', updateProgressBar);
    progressBar.addEventListener('input', seekVideo);
  
    function updateProgressBar() {
      progressBar.value = (video.currentTime / video.duration) * 100;
    }
  
    function seekVideo() {
      video.currentTime = (progressBar.value * video.duration) / 100;
    }
  
    // Mute/Unmute
    muteBtn.addEventListener('click', toggleMute);
  
    function toggleMute() {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
    }
  
    // Fullscreen
    fullscreenBtn.addEventListener('click', toggleFullscreen);
  
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  
    // Keyboard controls
    document.addEventListener('keydown', function(e) {
      switch(e.code) {
        case 'Space':
          togglePlayPause();
          e.preventDefault();
          break;
        case 'ArrowRight':
          video.currentTime += 5;
          break;
        case 'ArrowLeft':
          video.currentTime -= 5;
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
      }
    });
  });
