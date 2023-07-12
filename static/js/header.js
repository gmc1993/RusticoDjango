$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $("header").addClass("header2");
        }else{
            $("header").removeClass("header2");
        }

    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $("main").addClass("main2");
        }else{
            $("main").removeClass("main2");
        }
    });
});
