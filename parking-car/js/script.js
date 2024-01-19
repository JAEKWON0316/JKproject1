$(function(){

    $(document).keydown(function(e){
        //console.log(e.keyCode); 키값이 뭔지 콘솔로 알기위함
        const parkTop = $('.park').offset().top;
        const parkLeft = $('.park').offset().left;
        console.log('주차장의 좌표 ',parkTop, parkLeft);
       // $('#park').html(`(${parkTop}, ${parkLeft})`);
        //document.getElementById('park').innerHTML = 좌표
        let mycar = $('.mycar').offset();
        switch(e.keyCode) {
            case 65:
                $('.cloud').show(); //매연 나오게
                $('.mycar')
                    .css('transform', 'rotate(270deg)')
                    .stop()
                    .animate({ left: '-=200px'}, 500, function(){ //0.5초동안 200px씩 그리고 콜백시 매연이 hide하는 함수호출
                        $('.cloud').hide();
                        if((Math.abs(mycar.top - parkTop) < 50) && Math.abs(mycar.left - parkLeft < 50)){
                        alert("주차 성공");
                        };
                    }); 
            break;
            case 87:
                $('.cloud').show();
                $('.mycar')
                    .css('transform', 'rotate(0deg)')
                    .stop()
                    .animate({ top: '-=200px'}, 500, function(){ //0.5초동안 200px씩
                        $('.cloud').hide();
                        if((Math.abs(mycar.top - parkTop) < 50) && Math.abs(mycar.left - parkLeft < 50)){
                        alert("주차 성공");
                    };
                    });
            break;
            case 68:
                $('.cloud').show();
                $('.mycar')
                   .css('transform', 'rotate(90deg)')
                   .stop()
                   .animate({ left: '+=200px'}, 500,  function(){ //0.5초동안 200px씩
                    $('.cloud').hide();
                    if((Math.abs(mycar.top - parkTop) < 50) && Math.abs(mycar.left - parkLeft < 50)){
                    alert("주차 성공");
                    };
                }); 
            break;
            case 83:
                $('.cloud').show();
                $('.mycar')
                   .css('transform', 'rotate(180deg)')
                   .stop()
                   .animate({ top: '+=200px'}, 500,  function(){ //0.5초동안 200px씩
                    $('.cloud').hide();
                    if((Math.abs(mycar.top - parkTop) < 50) && Math.abs(mycar.left - parkLeft < 50)){
                    alert("주차 성공");
                };
                }); 
            break;
        }
    });
}); //jquery