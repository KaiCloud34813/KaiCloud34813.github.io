

$(document).ready(function() {

    
    
    let timer;
    function start() {
        timer = setInterval(grow, parseInt($("#interval").val()));
    }

    function grow() {
        let size = parseInt($(".circlee").height())+ parseInt($("#growth").val());
        $(".circlee").height(size);
        $(".circlee").width(size);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function draw() {
        
        let size = parseInt($("#width").val());
        
        let $a = $("<div class='circlee' id='cir'></div>");
        
        $("body").append($a);
        $("#cir").css("background-color","yellow");
        $("#cir").css("width",size);
        $("#cir").css("height",size);
        $("#cir").css("top", getRandomInt(size));
        $("#cir").css("left", getRandomInt(size));
        
        $("#cir").click(function () {
            this.remove();
        });
        
    }

    $( "#for" ).submit(function( event ) {
        event.preventDefault();
        draw();
        start();
      });
    

})