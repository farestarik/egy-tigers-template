$(document).ready(function(){
    
    $(".landing main").attr("style", '--box-h:calc(100% - 2px)');

    $(".landing nav .links").mouseover(function(){
        $(".landing nav .links ul").show();
        $(document).click(function(){
            $(".landing nav .links ul").hide();
            });
    });

    $(".landing nav .links").click(function(){
        $(".landing nav .links ul").show();
        $(document).click(function(){
        $(".landing nav .links ul").hide();
        });
    });


        let vid = $("#video");

        vid.on('ended', function(){

            vid.currentTime = 0.1; 
            vid.play();
        });
        
      

});