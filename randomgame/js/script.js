
function imges(){

   img = document.getElementById("img");
   let r = Math.floor(Math.random()*3) + 1;
   if(r == 1) {
    img.style.top="20%";
    img.style.left="150px"
   }
   if(r == 2) {
    img.style.top="20%";
    img.style.left="800px"
   }
   if(r == 3) {
    img.style.top="20%";
    img.style.left="1450px"
   }
}


$(function(){
   
   $('.box1').click(function(){
    const imgTop = $('#img').offset().top;
    const imgLeft = $('#img').offset().left;
    $('.box1').stop().hide();
    if(imgTop == 181 && imgLeft == 159){
        alert("쿠로미를 찾았습니다!");
    }
   });
   $('.box2').click(function(){
    const imgTop = $('#img').offset().top;
    const imgLeft = $('#img').offset().left;
    
    $('.box2').stop().hide();
    if(imgTop == 181 && imgLeft == 809){
        alert("쿠로미를 찾았습니다!");
    }
   });
   $('.box3').click(function(){
    const imgTop = $('#img').offset().top;
    const imgLeft = $('#img').offset().left;
   
    $('.box3').stop().hide();
    if(imgTop == 181 && imgLeft == 1459){
        alert("쿠로미를 찾았습니다!");
    }
   });
});  //jquery