

//5. 임의의 숫자와 13 사이의 차를 구하는 스크립트를 작성하시오. 단 숫자가 13보다 넓으면 절대 차이의 두 배를 반환 합니다.
  function diff(n){
    if(n <= 13){
        return 13 - n;
    }
    else {
        return (n - 13) * 2;
    }
}
console.log(diff(32));  //32는 13보다 큼으로 (32 -13) * 2
console.log(diff(10));

//6. 주어진 두 정수의 합을 계산하는 스크립트를 작성하시오. 단, 두 값이 동일하면 그 합을 세 배로 반환합니다.
function addn(x, y){
    if(x == y){
        return (x + y) *3;
    }
    else{
        return x + y;
    }
}
console.log(addn(10, 20)); 
console.log(addn(10, 10)); // x,y가 같음으로 (10+10) * 3 출력
 

//7. 지정된 숫자와 19사이의 절대 차를 계산 하는 스크립트를 작성하시오. 단 지정된 숫자가 19보다 큰 경우 절대 차의 3배를 반환합니다.
function diff_num(n){
    if(n <= 19){
        return 19 - n;
    }
        else{
            return (n - 19) * 3;
        }
    }
    console.log(diff_num(20));  // 19보다 큼으로 (20 - 19) * 3
    console.log(diff_num(10));

//8. 주어진 두 개의 수자 중 하나가 50이거나 그 합이 50이면 true를 반환하는 스크립트를 작성하시오.
 function test50(x, y){
   return (x==50 || y==50) || (x + y == 50); //조건식이므로 기본 boolean값이 나온다.
 }
 console.log(test50(10,20));
 console.log(test50(10,40)); //합이 50 true
 console.log(test50(50,30)); //x가 50 true
 

//9. 임의의 두 개의 정수가 하나는 양수 하나는 음수이면 true 를 반환하는 스크립트를 작성하시오.
  function tof(x, y){
    return (x < 0 && y > 0) || (x > 0 && y < 0);
  }
  console.log(tof(10,-5));  //둘이 다름으로 true
  console.log(tof(-10,5));  //둘이 다름으로 true
  console.log(tof(10,20));
  console.log(tof(-3,-5));
 

//10. 임의의 문자열 앞에 Py를 추가하여 문자열을 생성하는 스크립트를 작성하시오. 단, 임의의 문자열이 Py로 시작하면 원래 문자열을 그대로 반환합니다.
function stringAddPy(str){
    if(str === null || str === undefined || str.substring(0,2) === "Py"){
        return str;
    }
    return "Py"+ str;
} 
console.log(stringAddPy("Python")); //앞에 Py가 있음으로 Python은 그냥 Python으로 나옴
console.log(stringAddPy("javascript"));