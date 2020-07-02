$(document).ready(function(){
    $("#cardBtn").click(function(){
        let elementId = $("select").val()
        showCardInfo(elementId);
        let element = document.getElementById(elementId);
        element.scrollIntoView({behavior: "smooth", block: "start"});
    });
});