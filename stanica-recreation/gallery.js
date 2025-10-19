const swiper = new Swiper('.domik-swiper', {

    loop: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const reviews = new Swiper('.reviews-swiper', {
  spaceBetween: 20,
  slidesPerView: 3, 
  loop: true,

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    770: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const gallery = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  breakpoints: {

    770: {
      slidesPerView: 2
    },
    
    1050: {
      slidesPerView: 3
    },

  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});