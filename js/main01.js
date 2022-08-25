//main01.js

//상단메뉴 고정효과
$(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#top_wrap').stop(true,false).css({'position':'fixed', 'top':'0', 'background-color':'rgba(255,255,255,0.7)'});
        }
        else if($(this).scrollTop() < 40){
            $('#top_wrap').stop(true,false).css({'position':'relative', 'top':'0', 'background-color':'rgba(255,255,255,1)'});
        }
        else if($(this).scrollTop() == 40){
            $('#top_wrap').stop(true,false).css({'position':'relative', 'top':'0', 'background-color':'rgba(255,255,255,1)'});
        }      
});

$(document).ready(function(){
        rwd();      
            //article영역이 화면에 세로 100%만들기
    /*
            var winHeight = $(window).height();
            $("article").height(winHeight).css({lineHeight:winHeight + "px"});
            $(window).on("resize",function(){
                var winHeight = $(window).height();
                $("article").height(winHeight).css({lineHeight:winHeight + "px"});
            });
            */
            //스크롤찾아가기(원페이지)
			$("#category,.opening_down").find("a").on("click",function(){          
            $("html,body").stop().animate({scrollTop:$(this.hash).offset().top},500,"easeInOutQuart"); 
                return false;
            });
        $(".top_btn").click(function(){
            $("html,body").animate({scrollTop:0},500);
            return false;
        });
        
        //오프닝페이지(arc_01) 애니메이션효과
        $('.opening_img').addClass('animated bounceIn');
        /*$('.opening_text01').addClass('animated fadeInUp');*/
        $('.opening_text02').addClass('animated fadeInUp');
        $('.opening_text03').addClass('animated fadeInUp');
        $('.opening_down').addClass('animated fadeInUp');
    
        //포트폴리오(arc_03) 애니메이션효과
        $('.pf_more').addClass('animated bounceIn');
    });
/*끝*/
