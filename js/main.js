$(function(){

    $('.skip__slider-inner').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        
    });

    $('input').styler();

    $('.main__slider-inner').slick({
       vertical: true,
       arrows: false,
       wipeToSlide: true,
       ouchThreshold: true,
       verticalSwiping: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       mobileFirst: true ,
    });

    $('.open-popup-link').magnificPopup({
        // type:'inline',
        // midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });


      


      $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



  
    $(".main__station2").click(function(){
        $(".ticket__station").hide();
        $(".ticket__stop-rout").show();
    });
    $(".ticket__hide").click(function(){
        $(".ticket__stop-rout").hide();
        $(".ticket__station").show();
    });




});