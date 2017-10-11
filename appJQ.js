$(function () {
//PARALLAX
    if ($(window).outerWidth() > 768)
        $(window).on('scroll', function () {
            setTimeout(function () {
                $('.parallax').css('backgroundPositionY', (Number($(window).scrollTop() * 0.06) + '%'));
            }, 50);
        });

    $('#contactbtn, #contactbtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-contact").offset().top - 60},500);
    });

    $('#servicesbtn, #servicesbtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-services").offset().top - 60},500);
    });

    $('#aboutbtn, #aboutbtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-about").offset().top - 60},500);
    });

    $('#homebtn, #homebtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-home").offset().top - 60},500);
    });

    $('#gallerybtn, #gallerybtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-gallery").offset().top - 60},500);
    });

    $('#partnersbtn, #partnersbtn-xs').click(function () {
        $('html, body').animate({scrollTop:$(".id-partners").offset().top - 60},500);
    });
});

