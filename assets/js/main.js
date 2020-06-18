let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];
// var scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", event => {
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     scrollTopButton.style.display = "block";
    // } else {
    //     scrollTopButton.style.display = "none";
    // }

    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.getElementById(link.hash.substr(1, link.hash.length));

        if (
            section.offsetTop - 90 <= fromTop &&
            section.offsetTop - 90 + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

});