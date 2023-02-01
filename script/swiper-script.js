let swiperClass = document.querySelector(".features__swiper");
let swiperWrapperClass = document.querySelector(".features__about");
let swiperSlides = document.querySelectorAll(".about__item");

let initialSwiper = function () {
  swiperClass.classList.add('swiper');
  swiperWrapperClass.classList.add('swiper-wrapper');
  for (let swiperSlideClass of swiperSlides) {
    swiperSlideClass.classList.add('swiper-slide');
  };
  // Инициализация библиотеки свайпера
  new Swiper('.features__swiper', {
    pagination: {
      el: '.features__pagination',
      clickable: true,
    },
  });
}

let flagPhone = true;
// Инициализация свайпера особенностей
// Если ширина окна меньше
if (window.innerWidth < 768) {
  initialSwiper();
  flagPhone = false;
};
// Инициализация свайпера особенностей отзывов
new Swiper('.news-reviews__reviews', {
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reviews__arrow--right',
    prevEl: '.reviews__arrow--left'
  },
  simulateTouch: false,
});


// Изменение свойств при изменении размера экрана
window.addEventListener('resize', function () {
  if (window.innerWidth >= 767) {
    if (!flagPhone) {
      flagPhone = true;
      // Отключение свайпера особенностей,
      // для экранов шире мобильного
      swiperClass.classList.remove('swiper');
      swiperWrapperClass.classList.remove('swiper-wrapper');
      for (let swiperSlideClass of swiperSlides) {
        swiperSlideClass.classList.remove('swiper-slide');
        swiperSlideClass.removeAttribute('style');
      };
    };
  };
  if (window.innerWidth < 768) {
    if (flagPhone) {
      initialSwiper();
      flagPhone = false;
    };
  };
});
