import jQuery from "jquery";
import $ from "jquery";

jQuery(document).ready(function (){
    var so = document.getElementById("search_overlay");
    $('.search-click').on('click', function (){
        $(so).addClass('active');
    });

    $('.closebtn').on('click', function (){
        $(so).removeClass('active');
        $(so).addClass('closing');
        $(so).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(so).removeClass('closing');
        });
    });

    $(so).on('click', function (){
        $(so).removeClass('active');
        $(so).addClass('closing');
        $(so).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(so).removeClass('closing');
        });
    }).children().click(function(e) {
        return false;
    });
});