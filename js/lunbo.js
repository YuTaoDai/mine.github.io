/**
 * Created by RZ on 2015/11/18.
 */


var ii=0;
function nextImg(){
    $(".shade-luobo ul li")[11].style.display="none";
    if(ii>=11){
        ////$($(".shade-luobo ul li")[ii]).addClass("shadeImgMove");
        //$($(".shade-luobo ul li")[11]).css({"display":"block","transition":"all .3s","transform":"translateX(-50px)"});
        //$(".btnRight").css("color","gray")
        //setTimeout(function(){
        //    $(".shade-luobo ul li")[ii].style.transform="translateX(0px)";
        //},400)
        ii=0;
        nextImg()

    }else{
        $($(".shade-luobo ul li")[ii]).fadeOut("1000");
        setTimeout(function(){
            $($(".shade-luobo ul li")[ii]).fadeIn("1000");
        },500);
        console.log(ii);
        ii+=1;
    }
}

function revImg(){
    $(".shade-luobo ul li")[0].style.display="none";
    if(ii<=0){
        //$($(".shade-luobo ul li")[ii]).fadeIn("0");
        ////$($(".shade-luobo ul li")[0]).css({"display":"block","transition":"all .3s","transform":"translateX(50px)"});
        //
        //$(".btnLeft").css("color","gray")
        //setTimeout(function(){
        //    $(".shade-luobo ul li")[ii].style.transform="translateX(0px)";
        //},400)

        ii=11;
        revImg();

    }else{

        $($(".shade-luobo ul li")[ii]).fadeOut(1000);
        setTimeout(function(){
            $($(".shade-luobo ul li")[ii]).fadeIn(700);
        },300);
        ii-=1;
    }
}

function openShade(i){
  var n= i.data;
    ii=n;
    console.log(ii+"aaaaaaaa")
   console.log(n+"nnnnnnn")
    $(".shade").fadeIn("1000");

    $($(".shade-luobo ul li")[n]).fadeIn("1000");
    //$(".conltop-txt").text($($(".shade-luobo ul li")[n]).children("img")[0].alt)
}

$("#shadeBack").click(function(){
    console.log("aaaaa")
    $(".shade").fadeOut("1000");
    $(".shade-luobo ul li").each(function(index,obj){
        $(this).fadeOut("0");
    })
})
