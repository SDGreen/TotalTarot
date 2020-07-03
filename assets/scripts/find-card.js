$(document).ready(function(){

    /* code for search bar */
    $("#cardBtn").click(function(){
        let elementId = $("select").val()
        showCardInfo(elementId);
        let element = document.getElementById(elementId);
        element.scrollIntoView({behavior: "smooth", block: "end"});
    });


    /*code for back to stop button */
    window.onscroll = function(){scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            $("#back-to-top").fadeIn().css("display", "block")
        } else {
            $("#back-to-top").fadeOut();
        }
    }

    $("#back-to-top").click(function(){
        $(window).scrollTop(0);
    });
});