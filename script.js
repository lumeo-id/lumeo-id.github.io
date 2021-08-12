$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        var $navLogo = $("#nav-logo");
        var $navLinks = $("nav a");
        var $burger = $(".burger div");

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navLogo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navLinks.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $burger.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const burgerBar = document.querySelectorAll(".burger div");
    const nav = document.querySelector("nav");
    const navLogo = document.querySelector("#nav-logo");
    const navLinks = document.querySelector('.nav-links');
    const navList = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        if (!nav.classList.contains('scrolled')) {
            nav.classList.toggle('scrolled');
            navLogo.classList.toggle('scrolled');
            for (var i = 0, len = burgerBar.length; i < len; i++) {
                burgerBar[i].classList.toggle('scrolled');
            }
        }
    });

    navList.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards 1s';
    });
}

const app = () => {
    navSlide();
}

app();