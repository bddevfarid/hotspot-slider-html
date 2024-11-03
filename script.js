document.addEventListener("DOMContentLoaded", function() {
    // Thumbnail Slider
    var thumbSlider = new Swiper(".thumb-slider", {
      slidesPerView: 3, // Number of thumbnails visible
      watchSlidesProgress: true,
    });
  
    // Main Slider with Thumbnail Control
    var mainSlider = new Swiper(".main-slider", {
        slidesPerView: 1, // Number of slides visible
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSlider,
      },
    });
  });