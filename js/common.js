$('#owlCarouselWelcomeSlide').owlCarousel({
    loop:true,
    items: 3,
    margin:20,
    autoplay:true,
    // center: true,
    responsive:{
        0:{
            items:1,
        },
        576: {
            items:2,
        },
        768: {
            items:3,
        },
        992: {
            items:3,
        },
        1200: {
            items: 3,
        },
        1400: {
            items: 3,
        }
    }


});

$('#owlCarouselProjectSlide').owlCarousel({
    loop:true,
    items: 3,
    margin:20,
    autoplay:true,
    // center: true,
    responsive:{
        0:{
            items:1,
        },
        576: {
            items:2,
        },
        768: {
            items:3,
        },
        992: {
            items:3,
        },
        1200: {
            items: 3,
        },
        1400: {
            items: 3,
        }
    }


});

function imageLoaded(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', () => resolve(err));

        image.src = url;
    });
}

document.querySelectorAll('.carousel-link').forEach(item => {
    imageLoaded(item.dataset.serviceImage)
    .then((image) => {
        item.classList.remove('skeleton-screen-effect');
        item.style.backgroundImage = `url(${image.src})`;
    })
    .catch((err) => {
        console.log(err);
    });
});

document.querySelectorAll('.project-card-link').forEach(item => {
    imageLoaded(item.dataset.projectImage)
    .then((image) => {
        item.classList.remove('skeleton-screen-effect');
        item.style.backgroundImage = `url(${image.src})`;
    })
    .catch((err) => {
        console.log(err);
    });
});