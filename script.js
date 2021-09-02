// $(function () {
//     $(document).scroll(function () {
//         var $nav = $('nav');
//         var $navLogo = $('#nav-logo');
//         var $navLinks = $('nav a');
//         var $burger = $('.burger div');
//         var $floatingBtn = $('#floating-btn');

//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//         $navLogo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//         $navLinks.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//         $burger.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//         $floatingBtn.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const burgerBar = document.querySelectorAll('.burger div');
    const nav = document.querySelector('nav');
    const navLogo = document.querySelector('#nav-logo');
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

function startTimer() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // "Sep 30, 2021 00:00:00"
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    let countDown = new Date(targetDate).getTime(),
        x = setInterval(function() {
            let now = new Date().getTime();
            let distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");

            headline.innerText = "It's my targetDate!";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        }
        //seconds
    }, 0)
}

startTimer();

const app = () => {
    navSlide();
}

app();