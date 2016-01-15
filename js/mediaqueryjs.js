$(document).ready(function () {

    $('body').append('<div id="media-query-detector"></div>');

    function whichdevice() {
        if ($("#media-query-detector").css("z-index") == 2) {
            return "phone";
        } else if ($("#media-query-detector").css("z-index") == 3) {
            return "tablet";
        } else if ($("#media-query-detector").css("z-index") == 4) {
            return "desktop";
        } else {
            return "none";
        }
    }
    
    function checkdevice(){
        alert(whichdevice());
    }

    $(".status").html(whichdevice());
    
    $(window).resize(function () {
        $(".status").html(whichdevice());

        //usage example
        if (whichdevice() == "phone") {
            $(".status").css("color", "red");
        } else {
            $(".status").css("color", "black")
        }

    });
    
    $(".btn").click(function(){
        checkdevice();
    });

});