/*
let str2 = "나쁜 새끼 너 죽어.";
console.log(str2.indexOf("새끼"));

let str3 = "홍길동은 바보다";
console.log(str3.charAt(2));
*/
let str ="hello javascript";
 /*3에서부터 7전까지 ,인덱스 번호는 0부터 시작*/
console.log(str.slice(3, 7));
console.log(str.slice(3, -3)); //뒤에서 부터 첫 번재 글자가 -1임.

//substring ==> 첫 번째 인자 시작 인덱스 , 두 번째 인자 종료인덱스
//시작 인덱스는 문자열 포함, 종료 인덱스는 문자열 제외
//예를 들어 abcdefg.substring(2, 5) 하면 첫번째 인자 c부터 5번째 인자전 e까지 반환
//음수값을 넘기면 0인자 부터 시작
console.log("abcdefg".substring(2));
console.log(str.substring(3, 7));
console.log(str.substring(3, -3)); //3자리부터 0인자까지
console.log(str.substr(3, 2));

/* 배열로 바뀜*/
str = "3일차,01/02,화요일,1,19:10~20:00,하*호,영상 프로토타입 제작,프로토타입 제작하기"
let arr = str.split(",");
console.log(arr);