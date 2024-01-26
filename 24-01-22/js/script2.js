// 6. 주어진 세 정수 x, y, z중 가장 큰 정수를 찾아라.
function check(x,y,z){
    if(x > y && x > z){
        console.log(x);
    }
    else if(y > z){
        console.log(y);
    }
    else{
        console.log(z);
    }
}
check(50,70,10);
// 7. 주어진 두 개의 수 x, y중 100에 가까운 큰 정수를 찾는 함수를 작성하라. 단, 두 수가 같은 경우 false를 출력한다.
function check2(x,y){
    if(Math.abs(100 - x) < Math.abs(100 - y)){
        console.log(x);
    }
    else if(Math.abs(100 - x) == Math.abs(100 - y)){
        console.log("false");
    }
    else{
        console.log(y);
    }
}
check2(99,101);
// 8. 주어진 두 개의 수가 40~60 또는 70~100 범위에 있는지 확인하라.
function check3(x,y){
    if(((x >= 40 && x <= 60) || (x >=70 && x <= 100)) && ((y >= 40 && y <= 60) || (y >=70 && y <= 100)) ){
        console.log("두 개의 수가 40~60 또는 70~100 범위에 있습니다.");
    }  

    else{
        console.log("두 개의 수가 40~60 또는 70~100 범위에 없습니다.");
    }
}
 check3(45,75);
 // 8-2. 주어진 두 개의 수가 40~60 또는 두 개의 수가 70~100 범위에 있는지 확인하라.
 function num_range(x, y){
    if((x>=40 && x<= 60 && y >= 40 && y<=60) || (x>=70 && x<=100 && y>=70 && y<=100)){
        console.log("두 개의 수가 40~60 또는 70~100 범위에 있습니다.");
    }
    else{
        console.log("두 개의 수가 40~60 또는 70~100 범위에 없습니다.");
    }
 }
 num_range(45,75);
// 9. 정수 x, y중 큰 숫자를 찾는 스크립트를 작성하라. 단 두 숫자는 40~60범위에 있다.
function check4(x,y){
    if((x - y) < 0){
        console.log("두 수중 큰수는" + y + "입니다");
    }
    else if ((x - y) > 0){
        console.log("두 수중 큰수는" + x + "입니다");
    }
    else{
        console.log("두 수는 같습니다");
    }
}
check4(50,60);
// 10. 주어진 문자열에서 2번째와 4번째 위치 사이에 지정된 문자가 있는지 확인하는
//      프로그램을 작성하라.
//     예) function check_char("문자열", "지정한문자"); 
function check5(x, y){
    let str = x.substr(2,3);
    let str2 = str.indexOf(y);
   if (str2 >= 0){
    console.log("주어진 문자가 2~4번째 사이에 있습니다.");
   }
   else{
    console.log("주어진 문자가 2~4번째 사이에 없습니다.");
   }
}
check5("leejaekwon","j")



