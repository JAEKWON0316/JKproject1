
/*
A = B; //B를 A에 대입
A == B; //A와 B는 같다
A === B; // A와 B는 같다(타입까지)
대입연산
A -= B; ==> A = A - B
A += B; ==> A = A + B
A *= B; ==> A = A * B
A /= B; ==> A = A / B
A %= B; ==> A = A % B
*/
/*
let num1 = 10;
let num2 = 3;

num1 += num2;
console.log(num1); //13

num1 -= num2;
console.log(num1); //10

num1 *= num2;
console.log(num1); //30

num1 %= num2;
console.log(num1); //0

//증감연산자

let n1 = 10;
let n2 = 20;
let r;

n1--; // 9
console.log(n1);

n1++; //10
console.log(n1);

r = n2++; //r은20 n2는 21
console.log("result :" + r);
console.log("n2 :" + n2);

r = ++n2; //r은 22 n2는 22
console.log("result :" + r);
console.log("n2 :" + n2);

//비교연산자

const k = 10; //숫자
const m = "10"; //문자

console.log(k==m); 
console.log(k===m); //false 나옴 타입이 달라서

const a = 10;
const b = 20;
const c = 10;
const d = "20";
let result;

result = a > b;
console.log(result); //false

result = a < b; 
console.log(result); //true

result = a <= b;
console.log(result); //true

result = b === d; 
console.log(result); //false 

result = a != b;
console.log(result); //true

result = b == d; //true
console.log(result);
*/

let a = 10, b= 20, m= 30, n = 40;
let r;

r = a > b || b >= m || m > n; // f or f or f or = f
console.log(r);

r = a > b || b >= m || m <= n; // f or f or t = t
console.log(r);

r = a <= b && b >= m && m <= n; // t or f or t = f
console.log(r);

r = a <= b && b <= m && m <= n; // t or t or t = t
console.log(r);

r = !(a > b); //f의 반대 t
console.log(r);

r = a > b ? "noscript" : "javascript"; //조건식 확인후 T or F 에 관한값 출력.
console.log(r)



