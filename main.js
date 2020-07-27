$(document).ready(function() {

    // getNumber(); stavo risolvendo un altro problema, non so quale ma lo stavo risolvendo.

    $('.prev').click(function(){
        prevImage();
    });

    $('.next').click(function(){
        nextImage();
    });

    $('.nav i').click(function(){
        removeActive();
        $(this).addClass('active');
        selectImg($(this));
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

    // un po di deliri pre soluzione
    // function getNumber (){
    //     var getZero = $('.first');
    //     getZero.addClass('slide'+ 0);
    //
    //     var i = 1;
    //     while(!getZero.hasClass('last')){
    //         getZero.next().addClass('slide'+ i);
    //         getZero=getZero.next();
    //         i++
    //     }
    // }

    // complichiamoci la vita
    // function removeActive (){
    //     var object = $('.first');
    //     object.removeClass('active');
    //     while(!object.hasClass('last')){
    //         object.next().removeClass('active');
    //         object=object.next();
    //     }
    // }

    function removeActive(){
        $('.images img').removeClass('active');
        $('.nav i').removeClass('active');
    }

    function selectImg(x){
    $('.images img').eq(x.index()).addClass('active');
    }
});
