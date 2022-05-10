"use strict";





$(function () {


    // scroll fixed header=======================================
    let header = $("#header");
    let home = $("#home");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let menu = $("#menu");
    let menuToggle = $("#menuToggle");

    checkScroll(scrollPos, headerH)

    $(window).on("scroll resize", function () {

        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH)
    });


    function checkScroll(scrollPos,
        headerH) {
        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    // click on header menu==================================

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top

        menu.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 20
        }, 700)

    });

    // navToggle==================================================

    menuToggle.on("click", function (event) {
        event.preventDefault();

        menu.toggleClass("show");
    });

    // Reviews: https://kenwheeler.github.io/slick/    (посилання на бібліотеку)
    // let slider = $("#reviewsSlider");

    // slider.slick({
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     arrows: false
    // });




});

