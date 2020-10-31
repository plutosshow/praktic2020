$(document).on('scroll', function() {
    $('.menu__item_logo img').toggleClass('small', $(document).scrollTop() >= 10);
    $('.menu__item_logo').toggleClass('menu__item_logo-small', $(document).scrollTop() >= 10);
    $('.menu__item').toggleClass('menu__item-small', $(document).scrollTop() >= 10);
    $('.nav-bar').toggleClass('nav-bar-small', $(document).scrollTop() >= 10);
});

$(document).ready(function(){
    $(".light_scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});