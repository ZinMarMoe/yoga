// Owl Carousel----Home
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        
        animateIn:"fadeIn",
        animateOut:"fadeOut"
    
    });
    // $('#owl-demo').owlCarousel({
    //     navigation : true,
    //     singleItem : true,
    //     transitionStyle : "fade"
    //   });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    
});