// 1. 첫 번째 문자와 마지막 문자의 위치를 바꾸어 출력하는 스크립트를 작성하라.
//    예) swift ===> twifs
//let a = "swift"
//console.log(a.substring(0,1));
// console.log(a.substring(a.length-1,a.length));
function swift(a){
let b = a.substring(0,1);
let c = a.substring(a.length-1,a.length);
  console.log(c + a.substring(1,a.length-1) + b);
}
swift("swift");
// 2. 양의 정수 x가 3또는 7의 배수인지 확인하는 함수를 작성하라.
function check(x){
    if(x % 3 == 0 || x % 7 == 0){
        return("x는 3 또는 7의 배수입니다");
    }
    else{
        return("x는 3 또는 7의 배수가 아닙니다");
    }
}
console.log(check(3));
// 3. 임의의 문자열str의 마지막 3자를 가져와 str의 앞과 뒤에 출력
//    예)swift ===> iftswiftift
function str(str1){
     let a = str1.substr(str1.length-3,3);
     console.log(a + str1 + a);
}
str("swift");

// 4. 문자열이 'java'로 시작하는지 확인하라. (단, mach, search, indexOf같은 검색함수는 사용할 수 없다.
function java(str2){
   let str3 = str2.split("java");
    console.log(str3.length);
    if(str3.length > 1){
        console.log("문자열이 java로 시작합니다");
    }
    else{
        console.log("문자열이 java로 시작하지않습니다.");
    }
}
java("javascript");


// 5. 임의의 수 x, y가 보두 50~99사이에 있는지 확인하라.
function check2(x,y){
    if(x >= 50 && x <= 99 && y >=50 && y <= 99){
        console.log("두 수가 50~99 사이에 있습니다");
    }
    else{
        console.log("두 수가 50~99 사이에 있지 않습니다.");
    }
}
check2(50,50);

