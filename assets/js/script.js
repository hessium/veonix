(async () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll("img.lazyload");
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        const lazySizesLib = await import('/assets/js/lazysizes/lazysizes.min');
        lazySizes.init();
    }
})();

document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.hero-swiper__container', {
        slidesPerView: 2.3,
        spaceBetween: 32,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                return `<span class="hero-swiper__bullet hero-swiper__bullet--active">${(current + '').padStart(2, "0")}</span> / <span class="hero-swiper__bullet">${(total + '').padStart(2, "0")}</span>`;
            }
        },
        navigation: {
            nextEl: '.hero-swiper-next',
            prevEl: '.hero-swiper-prev',
        },
    });

    const swiperProjects = new Swiper('.projects-swiper', {
        slidesPerView: 2,
        spaceBetween: 32,
        loop: false,
        navigation: {
            nextEl: '.projects-swiper-next',
            prevEl: '.projects-swiper-prev',
        },
    });

});