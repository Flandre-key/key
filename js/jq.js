/**
 * Created by δ������ on 2017/4/6.
 */
//��ҳͼƬ�л�����
$(function(){

    $(".a1").mouseenter(function(){
        $(this).stop(true,false);
        $(this).animate({"margin-top":"-3"},300);
        $(this).addClass("shadow")

    })
    $(".a1").mouseleave(function(){
        $(this).stop(true,false);

        $(this).animate({"margin-top":"0"},300);
        $(this).removeClass("shadow")


    })



});

 //�ײ�����ѡ����
$(function(){
    $(".yy").mouseenter(function(){
        $(".foot_hide").show();
    });
    $(".foot_hide").mouseleave(function(){
        $(".foot_hide").hide();
    });
    $(".foot_hide ul a").click(function(){
        $(".yy a").text($(this).text())
        $(".foot_hide").hide("600");
    })

})

//��ҳ����л�

$(function(){
    $("#middle").fadeIn(500,function(){

    });
})
$(function(){
    $("#lunbo li").click(function(){
        $(this).addClass("hx").siblings().removeClass("hx");
        var index=$(this).index();

        $("#middle .qiehuan").eq(index).slideDown(1500)
        .siblings().slideUp(1500);
    })



})

//��ҳ��ർ����
$(function(){
    $("#nav .li").mouseenter(function(){
        var index=$(this).index();

        $(".nav_right").eq(index).show(0);

    })







    $("#nav .li").mouseleave(function(){
        $(".nav_right").hide(0)

    })
    $(".nav_right").mouseenter(function(){
        $(this).show(0);
    })
    $(".nav_right").mouseleave(function(){
        $(this).stop(true,false);
        $(this).slideUp(500);
    })

})