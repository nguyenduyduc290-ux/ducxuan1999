// console.log("cau 1");
// let s=1;
// for(let i=1;i<=100;i++){
//     s=s+i;
// }
// console.log(s);
console.log("cau 2");
for(let i=1;i<=100;i++){
    if(i%3===0&&i%5===0){
        console.log(i);
    }
}
console.log("bai3");
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}
console.log(factorial);
console.log("bai4")
for (let i = 2; i <= 9; i++){

    for (let j = 1; j <= 10; j++) {
        console.log(`${i}x${j}=${i*j}`)
         
    }console.log("=========")
}   
console.log("cau 5");
let number =35;
let str ='';
for(let i=0; number>0;i++){
    str = (number %2) +str;
    number =Math.floor(number/2);

}
console.log(str);
console.log("cau 6");
let i=5;
let s=0;
for(let i=1; i<=5;i++){
    s = Math.sqrt(i+s);

}
// console.log(s);
// console.log("cau 6");
// // let n=6;
// let s=0,
// for(let i=n;i<=6;i++);




console.log("cau8");
const arrayname=[1,2,4];
const [x,y,z] = arrayname;
console.log(x);
console.log(y);
console.log(z);