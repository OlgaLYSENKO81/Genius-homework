const swiper = new Swiper('.procedures-section__container', {
  loop: true,
  slidesPerView: '1',
  spaceBetween: '16',

  breakpoints: {
    480: {
      slidesPerView: '2',
    },
    768: {
      slidesPerView: '2',
    },
    1048: {
      slidesPerView: '3',
    },
    1280: {
      slidesPerView: '3',
    },
    1920: {
      slidesPerView: '3',
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
  watchOverflow: false,
});
