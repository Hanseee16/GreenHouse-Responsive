// Responsive
$(document).ready(() => {
  $(".menuOpen").click(() => {
    $(".menu-wrapper").addClass("active");
  });
  $(".menuClose").click(() => {
    $(".menu-wrapper").removeClass("active");
  });

  // Navbar aktif
  $(document).scroll(() => {
    $(".navbar").toggleClass("active", $(this).scrollTop() > $(".navbar").height());
  });
});

// Slide Image Home
var swiper = new Swiper(".mySwiperHome", {
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});

// Slide Product
var swiper = new Swiper(".mySwiperProduct", {
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// Slide Testimoni
var swiper = new Swiper(".mySwiperTesti", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});
