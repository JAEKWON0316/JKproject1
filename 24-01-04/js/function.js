
//전연벽수
//const x = 20;
//const y = 30;  
/*      
function add(x, y) {  
    return x + y;
}
*/

//console.log(add(10,20));
//console.log(x + y);
/**
 * function 키워드 : 함수 리터럴은 function으로 시작한다.
 * add(): 함수명// 함수명이 없는 경우는 익명함수라 한다.
 * (x + y): 매개변수
 */
/*
function multy(x , y) {
   console.log(x * y);
}
multy(10,23);

*/
/*
function partition(x, y) {

    let a = x + y;
    if(a % 2 == 0) {
        console.log("짝수입니다.");
    }  
    else {
        console.log("홀수입니다.");
    }
}
partition(5, 6);
*/

/*
function partition(x, y) {

    let a = x + y;
    var num = 40;
    if(a % 2 == 0) {
        console.log("짝수입니다.");
    }  
    else {
        console.log("홀수입니다.");
    }
    console.log(num)
}
console.log(num);
partition(10 , 22);
*/
/*
var num2 = 10;
console.log(num2);
if(1) {
     var num2 = 11;
     console.log(num2);
 }
 console.log(num2);
*/

//partition(10, 22);
//console.log(num);
let week;
const t = new Date();
// 오늘은 0000년 00월 00일 (00요일) 입니다. 라고 출력해 보세요.


const weeks = t.getDay();

switch(weeks) {
    case 0:
        week = "일요일";
        break;
        case 1:
        week = "월요일";
        break;
        case 2:
        week = "화요일";
        break;
        case 3:
        week = "수요일";
        break;
        case 4:
        week = "목요일";
        break;
        case 5:
        week = "금요일";
        break;
        case 6:
        week = "토요일";
        break;
        
}
console.log(week);
console.log(t.getFullYear() + "년" , t.getMonth() + 1 +"월", t.getDate() + "일 " + week + "입니다");
const nowdate = `오늘은 ${t.getFullYear()}년 ${t.getMonth()+1}월 ${t.getDate()}일 ${week} 입니다. `;
console.log(nowdate);

let a = new array([]);
a = 1, 2 ,3 ,4 ,5;
console.log(a);