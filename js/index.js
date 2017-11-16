

$(function($){
    $("#fullpage").fullpage({
        sectionsColor:["#f4a460","#8fbc8f","#f79cd6","#6495ed","","","","black"],
        anchors:["Page1","Page2","Page3","Page4","Page5","Page6","Page7"],  /*定义锚点链接，注意不要和页面上的ID或者name重名!*/
        /*导航*/
        navigation:true,
        navigationPosition:"right",
//            autoScrolling:false ,      /*改的是从一个section自动滚动到另一个section的特效*/
        navigationTooltips:["第一页","第二页","第三页","第四页","第五页","第六页","第七页"] , /*鼠标移入的时候提示*/
        scrollOverflow:true        /*需要使用slimscroll.js才能生效*/
    })


    $(".zoom-in").each(function(i,obj){
        $(this).click(i,openShade)
    })

})
var aa=0;
$(".page1").mousewheel(function(event,delta){

//        console.log(event.currentTarget)
//        console.log(delta)
    $.fn.fullpage.setAllowScrolling(false)
    if(delta>0){
        aa--;
    }else if(delta<0){
        aa++;
    }
    if(aa<=0){
        aa=0;
    }
    if(aa>=30){
        aa=30;
        $.fn.fullpage.setAllowScrolling(true)
        //page();
    }
    //console.log($(e).children(".page1img")[aa])
    $(".imgfull").children(".page1img").each(function(index,obj){
        //console.log(index)
        if(index==aa){
            $(this).css("opacity","1")
        }else{
            //console.log(index)
            $(this).css("opacity","0")
        }

    })

})


$(".zoom-in ").each(function(i,obj){

    $(this).click(i,openShade)

})
$("#stores-container").mouseover(function(){
    //alert("aaaaaaaaaaaa")
    $.fn.fullpage.setAllowScrolling(false)
})
$("#stores-container").mouseout(function(){
    $.fn.fullpage.setAllowScrolling(true)
})
$("#intro").mouseover(function(){
    //alert("aaaaaaaaaaaa")
    $.fn.fullpage.setAllowScrolling(false)
})
$("#intro").mouseout(function(){
    $.fn.fullpage.setAllowScrolling(true)
})
$("#topfull").click(function(e){
    $(".page4top").addClass("open")
    $(".page4top").css({"height":"100%"})
    $(".page4top-helf-view").css({"display":"none","opacity":0})
    $(".page4top-view").css({"display":"block","z-index":5,"height":"100%"})

})
$("#tophelf").click(function(){
    $(".page4top").css({"height":"50%"})
    setTimeout(function(){
        $(".page4top").removeClass("open")
        $(".page4top-view").css({"display":"none","z-index":0,"height":"200%"})
        $(".page4top-helf-view").css({"display":"block","opacity":1})
    },600)

})
$("#botfull").click(function(e){
    $(".page4bottom").addClass("open")
    $(".page4bottom").css({"height":"100%"})
    $(".page4bot-helf-view").css({"display":"none","opacity":0})
    $(".page4bot-view").css({"display":"block","z-index":5,"height":"100%"})

})
$("#bothelf").click(function(){
    $(".page4bottom").css({"height":"50%"})
    setTimeout(function(){
        $(".page4bottom").removeClass("open")
        $(".page4bot-view").css({"display":"none","z-index":0,"height":"200%"})
        $(".page4bot-helf-view").css({"display":"block","opacity":1})
    },600)

})


$("#del1").click(function(){

    $("#black-detail-1").addClass("active")
})
$("#clodel1").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#black-detail-1").removeClass("active");
    },700)

})
$("#del2").click(function(){
    $("#black-detail-2").addClass("active")
})
$("#clodel2").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#black-detail-2").removeClass("active");
    },700)

})
$("#del3").click(function(){
    $("#black-detail-3").addClass("active")
})
$("#clodel3").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#black-detail-3").removeClass("active");
    },700)

})


/*bon*/
$("#bondel1").click(function(){
    $("#white-detail-1").addClass("active")
})
$("#bonclo1").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#white-detail-1").removeClass("active");
    },700)

})
$("#bondel2").click(function(){
    $("#white-detail-2").addClass("active")
})
$("#bonclo2").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#white-detail-2").removeClass("active");
    },700)

})
$("#bondel3").click(function(){
    $("#white-detail-3").addClass("active")
})
$("#bonclo3").click(function(){
    $(".active>.pane-right").css({"transform":"translateX(100%)"})
    $(".active>.pane-left").css({"transform":"translateX(-100%)"})
    setTimeout(function(){
        $("#white-detail-3").removeClass("active");
    },700)

})




