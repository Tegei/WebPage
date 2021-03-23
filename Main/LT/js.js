var count = 0;
var donef = 'AA';
$("fire").on("mouseover",function(){

if (donef.indexOf($(this).attr('id'))==-1) {
$(this).fadeOut( 1000 );
 
 
donef = $(this).attr('id')+donef;
count++;
 
$("#bg").fadeTo("slow", (1-(count*0.25)));
$("[id=bar]").fadeTo("slow", (1-(count*0.3)));
$("[id=retn]").fadeTo("slow", 1);
 if(count==4){
    // コンソールに県名を表示
setTimeout(function(){
$("#spin").css('transform', 'rotate(' + 90 + 'deg)'); 
$("[id=linkc]").css('color', '#00FFFF'); 
$(function(){
    setInterval(function(){
　　　　$("[id=linkc]").fadeToggle(1000);
    },1000);
});
 $("div").removeClass("shake-slow");
 
 $("fire").fadeTo(200, (1)); 
$("[id=bar]").fadeTo(1000, (1)); 
$("[id=bg]").fadeTo(1000, (1)); 
 ;
},2200);
}
}
});