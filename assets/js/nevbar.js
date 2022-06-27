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

    $('.otherSections').on('click', function() {
        $('#otherSections').toggleClass('show');
        $('.otherSections').attr('aria-expanded',$(this).attr('aria-expanded')==='true'?'false':'true' );
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

    /*
	    Wow
	*/
    new WOW().init();

});