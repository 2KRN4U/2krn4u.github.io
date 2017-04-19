// JavaScript Document
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
