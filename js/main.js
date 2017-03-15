$(document).ready(function () {
    
    var menu = $("a[hreflang|='menu']");
    
    menu.click(function (e) { 
        e.preventDefault();
        $(".submenu").toggleClass("anima");
        $(".arrow").toggleClass("giro");
        $(".menu").toggleClass("menu-casamento");
        $(".shape").toggleClass("shape-color");
    });

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

});