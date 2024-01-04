// let i = 10;
// do{
//     console.log("hello");
//     i--;
// }while(i < 3)

// console.log(i);

// while(i < 20){
//     console.log(i);
//     i++;
// }
// /*for 는 for(초기값; 조건식; 증감식){

// }*/
// for(let i=10;i < 20;i++){
//     console.log(i);
// }
// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0) continue;
//     console.log(i);
// }
// let tb = "table";
// for(let n = 1; n <=3; n++){
//     tb + n + "행";
//     for(let m =1; m <=3; m++){
//         tb += m + "열";
//     }
// }
// tb += "/table";
// console.log(tb);


// for(let i = 2; i <= 9; i++) 
// {  console.log(i + '단');  
//     for(let j = 1; j <= 9; j++) {
//         console.log(i + ' * ' + j + ' = ' + (i*j));  
// }
// }

for(let m = 2; m <= 9; m++){
    for(let n = 1; n <= 9; n++){
        console.log(`${m}x${n}=${m*n}`);
        
        //console.log(m+"x"+n+"="+m*n);
        //document.write(m + "x" + n "=" n*m);
        
    }
    //document.write("<br>");
}