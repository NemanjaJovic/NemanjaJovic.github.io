$(document).ready(function(){
/* STICKY NAVIGATION */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

/* Scroll on buttons */

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 3000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

/* NAVIGATION SCROLL */

    $('.btn-food').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 3000);
    });

    $('.btn-how').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    });

    $('.btn-cities').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 3000);
    });

    $('.btn-prices').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 3000);
    });

    $('.btn-home').click(function(){
        $('html, body').animate({scrollTop: $('.js--home').offset().top}, 1500);
    });


});