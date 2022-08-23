var swiper = new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    speed: 500,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
});