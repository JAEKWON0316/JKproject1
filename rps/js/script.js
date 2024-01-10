function rcs(n){
    const com = Math.floor(Math.random()*3); //floor은 소수점 넘치는거 없앰.
    let rcsArray = ["가위", "바위", "보"];
    let pst = ["-135px -108px", "-70px -6px", "3px -108px"]; //가위 바위 보 이미지 위치

    document.getElementById("rcs-me-txt").innerHTML = rcsArray[n];
    document.getElementById("rcs-com-txt").innerHTML = rcsArray[com];
    document.getElementById("rcs-me").style.backgroundPosition = pst[n];
    document.getElementById("rcs-com").style.backgroundPosition = pst[com];  //JS에서는 낙타표기법으로
}

   /*
   if(rcs(1)){

   }
   if(rcs(2)){   
   }                                          
}
/*
function rcs(){
            
    const b = 0;
    const a = Math.floor(Math.random() * 3);
    document.getElementById("rcs-me").innerHTML = rsp[b];
    document.getElementById("rcs-com").innerHTML = rsp[a];
    if(a>=1 && a<2){
        document.getElementById("talk").innerHTML="졌습니다";
    }else if(a < 1){
        document.getElementById("talk").innerHTML="비겼습니다";
    }
    else {
        document.getElementById("talk").innerHTML="이겼습니다";
    }
}
function rcs(n){
    const c = 1;
    const a = Math.floor(Math.random() * 3);
    document.getElementById("rcs-me").innerHTML = rsp[c];
    document.getElementById("rcs-com").innerHTML = rsp[a];

if(a>=2){
        document.getElementById("talk").innerHTML="졌습니다";
    }else if(a >= 1 && a <2){
        document.getElementById("talk").innerHTML="비겼습니다";
    }
    else {
        document.getElementById("talk").innerHTML="이겼습니다";
    }
}
function rcs(n){
    const d = 2;
    const a = Math.floor(Math.random() * 3);
    document.getElementById("rcs-me").innerHTML = rsp[d];
    document.getElementById("rcs-com").innerHTML = rsp[a];
    if(a<1){
        document.getElementById("talk").innerHTML="졌습니다";
    }else if(a>=1 && a <2){
        document.getElementById("talk").innerHTML="이겼습니다";
    }
    else{
        document.getElementById("talk").innerHTML="비겼습니다";
    }
}
*/