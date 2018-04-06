$(document).ready(function() {
    //$('.popup').magnificPopup();

    $('.popup').click(function() {
        $(this).siblings('.menu').fadeToggle();
    });

    $(".chevron").click(function() {
        $(this).siblings(".operators").fadeToggle();
    });

});