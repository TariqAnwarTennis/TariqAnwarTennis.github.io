$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        navText:false,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:2,
            },
            1250:{
                items:3,
                loop:true
            }
        }
    })
})