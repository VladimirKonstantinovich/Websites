// Swiper js 

const swiper = new Swiper('.nomera-swiper', {
    // slidesPerView: 1.25,
    spaceBetween: 20,
    
    loop: true,
  
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
  spaceBetween: 25,
  slidesPerView: 3, 
  loop: true,

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30
    },

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const birthday_swiper = new Swiper('.birthday-swiper', {
  spaceBetween: 10,
  slidesPerView: 3, 
  loop: true,

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 15
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

})



 