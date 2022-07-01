import jQuery from "jquery";
import $ from "jquery";

jQuery(document).ready(function (){
    var so = document.getElementById("search_overlay");
    $('.search-click').on('click', function (){
        $(so).addClass('active');
    });

    $('.closebtn').on('click', function (){
        $(so).removeClass('active');
    });
});