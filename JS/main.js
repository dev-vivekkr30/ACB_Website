$(document).ready(function () {
    (function ($) {
        $('.brand-carousel').owlCarousel({
            loop:true,
            margin:10,
            center:false,
            autoplayTimeout:4000,
            autoplay:false,
            dots:false,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
         })
    })(jQuery);
});



