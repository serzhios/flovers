const flowersSlider = new Swiper('.flowers-slider', {
    // параметры слайда
    //direction: 'vertical',
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

const reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайда
    //direction: 'vertical',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});