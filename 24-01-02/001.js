/*
let a=10 , b=20, m=30, n=40;
let r;

r = a > b || b >= m || m > n;
console.log(r);

r = a <= b && b >= m && m <= n;
console.log(r);

if (a < b || m > n) {
    console.log("참");
} 
else {
    console.log("거짓");
}

/*
r = a < b || m > n
if(r)
{
    console.log("참");
} 
else {
    console.log("거짓");
} 

r = a > 8 && a <15;

    console.log(r);
*/
/*
let a = 20;
switch(a) {
    case 10 :
        console.log("a는 10");
        break;
        case 15:
            console.log("a는 15");
        break;
        case 20:
            console.log("a는 20");
            break;
        default: 
        console.log("a는 모르는수입니다");
}
*/
/*
let a = 1;
while(a < 10) {
    console.log(a);
    a++;
}
*/

let i = 1;  //변수
while(i <= 100) { //i가 100까지 루프
    if (i % 2 == 0 && i % 6 == 0) { //조건식
        console.log(i);  //조건식에 맞으면 출력
    }
    i++; // 증감식 1씩 올라감
} 

