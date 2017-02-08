// JavaScript Document

// Pauses carousel on hover :3
$(function(){
    $('#myCarousel.slide').carousel({
        interval: 5000,
        pause: "hover"
    });

    $('input').focus(function(){
       $("#myCarousel").carousel('pause');
    }).blur(function() {
       $("#myCarousel").carousel('cycle');
    });
});
