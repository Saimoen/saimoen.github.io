$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }}),

// slide-up script

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
})



    //TOGGLE MENU/NAVBAR SCRIPT/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            },
        }
    })
})

//typing animation

var type = new Typed('.typing', {
    strings: ["Concepteur d'Applications", "Développeur Fullstack", "Expert Java / Angular", "Futur alternant Master"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var type = new Typed('.typing-2', {
    strings: ["Passionné d'Ingénierie", "Force de proposition", "Technophile curieux", "Orienté solutions métiers"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})