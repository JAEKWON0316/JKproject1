/*
let tv = new Object();
tv.color ="노란색";
tv.price = "2천만원";
tv.info = function(){
    console.log("tv 색상 :" + this.color);
    console.log("tc 가격 :" + this.price);
}
tv.info();

let car = new Object();
car.color = "검정색";
car.price = "1억";
car.info = function (){
    console.log("car 색상 :" + this.color);
    console.log("car 가격 :" + this.price);

}
car.info();
*/
const car = {
    color: "검정",
    price: "1억",
    info: function(){
        console.log(`자동차 색상 : ${this.color}`);
        console.log(`자동차 가격 : ${this.price}`);
    }
}
car.info();

/*
참조변수 = new Date();
*/
const t = new Date();
