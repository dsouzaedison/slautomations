$(function () {
//PARALLAX
    if ($(window).outerWidth() > 768)
        $(window).on('scroll', function () {
            setTimeout(function () {
                $('.parallax').css('backgroundPositionY', (Number($(window).scrollTop() * 0.06) + '%'));
            }, 50);
        });
});