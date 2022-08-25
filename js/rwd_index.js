function rwd(){
    var ww =  parseInt($(window).width());//오류가 계속 나도 실행은 됨
    var wh = $(window).height();
                if(ww<=480){
                    $("body").height(wh);
                }else if(ww<=640){
                    $("body").height(wh);
                }else if(ww<=768){
                    $("body").height(wh);
                }else if(ww<=1024){
                    $("body").height(wh);
                }else if(ww<=1200){
                    $("body").height(wh);
                }else{ 
                     $("body").height(wh);
                }
        }
