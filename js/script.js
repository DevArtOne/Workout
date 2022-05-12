"use strict";


function headerClick() {
    let headerClick = document.querySelector(".transform").style.transform;
    if (headerClick == "translateY(0px)") {
        document.querySelector(".transform").style.transform = "translateY(-60px)";
    } else {
        document.querySelector(".transform").style.transform = "translateY(0px)";
    }
}


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
        }
        // else {
        //     header.removeClass("fixed");
        // }

        if (scrollPos > headerH) {
            header.addClass("transform");
        } else {
            header.removeClass("transform");
        }

        if (scrollPos > headerH) {
            document.getElementById("dekorOne").style.transform = "translateY(0px) skewX(20deg)";
        } else {
            document.getElementById("dekorOne").style.transform = "translateY(-20px)";
        }
        if (scrollPos > headerH) {
            document.getElementById("dekorTwo").style.transform = "translateY(0px) skewX(-20deg)";
        } else {
            document.getElementById("dekorTwo").style.transform = "translateY(-20px)";

        }



        if (scrollPos > headerH) {
            document.getElementById("header").style.transform = "translateY(-60px)"
        } else {
            document.getElementById("header").style.transform = "translateY(0px)"
        }
    }
    // click on header menu==================================

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top

        menu.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 0
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

