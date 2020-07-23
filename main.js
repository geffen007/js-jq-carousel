$(document).ready(function() {

    $('.prev').click(function(){
        prevImage();
    });

    $('.next').click(function(){
        nextImage();
    });

    // funzioni

    function prevImage(){
        var activeImg = $('.images img.active');
        var activeRound = $('.nav i.active');

        activeImg.removeClass('active');
        activeRound.removeClass('active');

        if(activeImg.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImg.prev().addClass('active');
            activeRound.prev().addClass('active');
        }
    }

    function nextImage(){
        var activeImg = $('.images img.active');
        var activeRound = $('.nav i.active');

        activeImg.removeClass('active');
        activeRound.removeClass('active');

        if(activeImg.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImg.next().addClass('active');
            activeRound.next().addClass('active');
        }
    }


});
