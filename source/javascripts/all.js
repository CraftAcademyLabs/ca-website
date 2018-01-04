// All javascripts loaded in the footer

// Note the dependencies listed below will only be loaded in if the asset
// pipeline is set up. If you're loading this using Bower you'll need to include
// these yourself - the simplest way is just to add them using <script> tags in
// your layout html file
//
// Here are some useful paths for your copy/pasting convenience:
//
// bower_components/makers_styles/source/javascripts/vendor/jquery.js
// bower_components/makers_styles/source/javascripts/vendor/slick.js
// bower_components/makers_styles/source/javascripts/vendor/retina.min.js
// bower_components/makers_styles/source/javascripts/vendor/jquery.ajaxchimp.js
// bower_components/makers_styles/source/javascripts/vendor/baseliner.js
// bower_components/makers_styles/source/javascripts/navigation.js
// bower_components/makers_styles/source/javascripts/jquery.fixedscroll.js
// bower_components/makers_styles/source/javascripts/doorbell.js


//= require vendor/jquery
// require vendor/retina.min
//= require vendor/slick.js
//= require vendor/jquery.ajaxchimp
//= require vendor/prism
//= require navigation
//= require jquery.fixedscroll
// require doorbell
//= require vendor/baseliner
//= require tabs
//= require vertical_tabs
//= require elements

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function () {

    if(getCookie('newsFlash') != 'viewed') {
        $('#news-flash').show();
        setCookie('newsFlash', 'viewed', 7);
    }

    $('.slider').on('init', function () {
        var $sliderRows = $('.slider-row, .half-slider-row');
        $sliderRows.css("opacity", 1);
        $sliderRows.css("min-height", 0);
    });

    $('.slider:not(.lazy-slider)').slick({
        prevArrow: "<a class='slick-prev'></a>",
        nextArrow: "<a class='slick-next'></a>",
        adaptiveHeight: true
    });

    $('.lazy-slider').slick({
        prevArrow: "<a class='slick-prev'></a>",
        nextArrow: "<a class='slick-next'></a>",
        lazyload: 'progressive'
    });

    // set up sliders using Slick
    // set up email capture using AJAXChimp
    // set up instant feedback form using doorbell.io

    $('.definition-links').fixedScroll();

});
