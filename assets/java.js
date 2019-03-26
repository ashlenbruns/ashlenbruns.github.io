$("#about").on("click", function() {
    $("html,body").animate({
        scrollTop: $("#about-jumbo").offset().top
    }, "slow");
});


$("#portfolio").on("click", function() {
    $("html,body").animate({
        scrollTop: $("#portfolio-jumbo").offset().top
    }, "slow");
});


$("#contact").on("click", function() {
    $("html,body").animate({
        scrollTop: $("#contact-jumbo").offset().top
    }, "slow");
});