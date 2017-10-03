var rellax = new Rellax('.rellax');

$(document).ready(function(){
    navbarBackground();
    smoothScroll();
});

function navbarBackground(){
    var navbar = $(".js-navbar");
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 0 ) {
            navbar.addClass("navbar--scrolling");
        } else {
            navbar.removeClass("navbar--scrolling");
        }
    });
}

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}
