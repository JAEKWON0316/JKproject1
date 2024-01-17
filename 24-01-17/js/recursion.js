/*
function ten(){

    /*for(let i = 0; i <= 10; i++){
        console.log(i);
    }
    let i =1;
    while(i <= 10){
        console.log(i);
        i++;
    }
}
ten();
*/
let num = 0;
function ten(){
    num++
    console.log(num);
    if(num == 10) return;
    ten();
}
ten();