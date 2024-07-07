const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set "translatez()-400px  to previous slides "
      translate: [0, 0, -400],
    },
    next: {
      // will set translatex(100%) on the next slide
      translate: ["100%", 0, 0],
    },
  },
  loop: true,
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  speed: 400,
  spaceBetween: 100,
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  direction: "horizontal",
  LoopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  direction: "horizontal",
  LoopfillGroupwithBlank: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 2,
    },
  },
});
