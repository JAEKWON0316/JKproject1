



function nt(){
    const time = new Date();

    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const hourdeg = hour * (360 /12) + min * (360 / 12 / 60);
    const mindeg = min * (360 / 60);
    const secdeg = sec * (360 / 60);

    const elementhour = document.querySelector('.hour');
    const elementmin = document.querySelector('.minute');
    const elementsec = document.querySelector('.second');

    elementhour.style.transform = `rotate(${hourdeg}deg)`;
    elementmin.style.transform = `rotate(${mindeg}deg)`;
    elementsec.style.transform = `rotate(${secdeg}deg)`;
}
setInterval(nt, 1000)
nt();
let str =document.getElementById('change');
function btn(n){

    if(n==0){
        str.href=("/clock/css/clock"+n+".css"); // href="css/clock0.css"
    }
    if(n==1){
        str.href=("/clock/css/clock"+n+".css");
    }
}