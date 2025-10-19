const swiper = new Swiper('.nomer-swiper', {
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
