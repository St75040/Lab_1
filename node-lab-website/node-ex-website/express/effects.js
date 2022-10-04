$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).slideUp();
    });

    
    $(".toggle-btn").click(function(){
        $("p").fadeToggle();
    });

    $(".btn-one").click(function(){
        alert("St75040 - Aleksis");
    });
});