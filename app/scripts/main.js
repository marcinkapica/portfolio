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
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        hideMenu();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - $("#navbar").outerHeight(false)
                }, 1000);
                return false;
            }
        }
    });
}
