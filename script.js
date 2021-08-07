$(function () {
    $(document).scroll(function () {
        var $header = $("header");
        var $logo = $("#header-logo");
        var $nav = $("header a")

        console.log("hey");

        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
        $logo.toggleClass('scrolled', $(this).scrollTop() > $header.height());
        $nav.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });
});