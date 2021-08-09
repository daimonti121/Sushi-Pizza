$('.display__slider').slick({
    infinite: true,
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

let list = anime({
    targets: '.header__li',
    translateX: [200, 0],                
    delay: anime.stagger(50, {
        start: 1000,
    }),
    easing: 'easeInOutQuad'           
});    
let seo = anime({
    targets: '.header__h4',
    translateX: [200, 0],                
    delay: 1000,
    easing: 'easeInOutQuad'           
}); 
let about = anime({
    targets: '.header__p',
    translateX: [200, 0],                
    delay: 1000,
    easing: 'easeInOutQuad'           
});      
let number = anime({
    targets: '.header__h6',
    translateX: [70, 0],                
    delay: 1150,
    easing: 'easeInOutQuad'           
});   
let sity = anime({
    targets: '.header__h5',
    translateX: [120, 0],                
    delay: 1100,
    easing: 'easeInOutQuad'           
}); 
let year = anime({
    targets: '.header__year',
    translateX: [80, 0],                
    delay: 1000,
    easing: 'easeInOutQuad'           
});     
let bitTitle = anime({
    targets: '.header__h2, .header__h3',
    translateY: [200, 0],                
    delay: 220,
    easing: 'easeInOutQuad'           
});  
$('.header__slider').slick({
    infinite: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2800,
    fade: true,
    touchThreshold: 50
}); 
new WOW().init();