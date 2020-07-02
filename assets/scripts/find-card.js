$(document).ready(function(){
    $("#cardBtn").click(function(){
        let elementId = $("select").val()
        let element = document.getElementById(elementId);
        element.scrollIntoView({behavior: "smooth", block: "start"});
        showCardInfo(elementId);
    });
});