$(".search_bar input").focus(function() {
    document.getElementById("nav_m").classList.add(".bounceInDown");
    document.getElementById("nav_m").style.display = "none";
});

$(".search_bar input").on("change, blur", function() {
    document.getElementById("nav_m").style.display = "inline-block";

});