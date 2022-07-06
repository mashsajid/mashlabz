import jQuery from "jquery";
import $ from "jquery";
import WOW from "wow.js";

jQuery(document).ready(function() {

    /*
        Sidebar
    */
    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.category1').click(function(event) {
        $('#category1').slideToggle();
        $('.category1').attr('aria-expanded',$(this).attr('aria-expanded')==='true'?'false':'true' );
    });

    $('.category2').click(function(event) {
        $('#category2').slideToggle();
        $('.category2').attr('aria-expanded',$(this).attr('aria-expanded')==='true'?'false':'true' );
    });

    $('.category3').click(function(event) {
        $('#category3').slideToggle();
        $('.category3').attr('aria-expanded',$(this).attr('aria-expanded')==='true'?'false':'true' );
    });

    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
    });
    /* change sidebar style */
    $('a.btn-customized-dark').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').removeClass('light');
    });
    $('a.btn-customized-light').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('light');
    });

    $('.sidebar').mCustomScrollbar({
        theme: "minimal-dark"
    });

    /*
	    Wow
	*/
    new WOW().init();

});