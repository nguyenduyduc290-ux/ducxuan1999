
console.log("====== Bài 1 ====== ");
const fnc1 = (x) => {
  const A = 3;
  const B = 4;
  const result = A*x + B;
  return result;
};

console.log(fnc1(5));

console.log("===bai2====")
const parimerReg =(weidth,lenght)=>{ const resulet =(weidth+lenght)*2;
  return resulet ;

}

console.log(parimerReg(15,10))


console.log("===bai3===")
const fen1 = (x)=>{
  const result = Number (x * x *3.14).toFixed(2);
  return result;
};
console.log(fen1(5));

console.log("===bai4===")
const isPrime =(Number)=>{
  if (Number<=1) return false;
  for(let i=2;i<=Number-1;i++){
    if(Number % i===0 ) return false;
  }
  return true;
};
console.log(isPrime(18))

console.log("===bai5===");
const sumNumbers=(...Numeber)=>{
  let total =0;
  for(let i=0 ;i< Numeber.length;i++){
    const item = Numeber [i];
    total+= item ;

  }
  return total ;  
};
console.log(sumNumbers(1,2,3,4,5,19,189,92,293-232,-2323));



console.log("===bai6===")
const  sum =(start,end)=> { 
  if( start> end ) {
    console.log('tham so k hop le');
    return 0;

  }
  let total =0;
  for(let i= start ;i<=end;i++){
    total += i;

  }
  return total;
};
console.log(sum(5,10));

console.log("===bai7===")
const isPalindromestring =(str)=>{
  const arr = str.split('');
  console.log(arr);
  const reverseArr = arr.reverse();
  const reverseStr = reverseArr.join('');
  return str === reverseStr;
}
console.log(isPalindromestring('madam'));


console.log("===bai8===")
const isALLIEver  = (Numbers) => {
for(let i=0;i<Numbers.length;i++){
 (Numbers[i] %2!==0)
    return  false; 
  }
  return true;
}
console.log(isALLIEver([2,4,6,8,10,12,14,16,18,20,1]))
console.log("===bai9===")
const sumIgnoreNegatives = (...Numbers) => {
  let total = 0;
  for(let i=0;i<Numbers.length;i++){
    if(Numbers[i] <0) continue;
    total += Numbers[i];
  }
  return total;
}
console.log(sumIgnoreNegatives(3, -1, 4, -2, 5));

console.log("===bai10===")
const finemax = (...Numbers) => {
  let max = Numbers[0];
  for(let i=1;i<Numbers.length;i++){
    if(Numbers[i] > max){
      max = Numbers[i];
    }
  }
  return max;
}
console.log(finemax(1, 2, 3, 4, 5, -6, -7, -8, -9, -10));

console.log("===bai11===")
const myInput  =  (myFunction)=>{
  let input = "12, 33, 45, 7, 89" ;
 let Numbers = input.split(',').map(Number);
 
 return myFunction(Numbers);
};
 function findMax(Numbers) {
  return Numbers.sort((a, b) => a-b)


 };

console.log(myInput(findMax));

console.log("===bai12===")
 function  myfunction(Numbers,K){
  let unique=[...new Set(Numbers)];
  return unique[K-1];

 }
 console.log(myfunction([2,5,2,7,9,10], 3));

 console.log("===bai13===")
 function findMostRepeat(numbers) {
  let count ={};
   for(let number of numbers){
    if (count[number]){
      count[number]++;
 } else {
      count[number] = 1;
    }}
    let maxCount = 0;
    let result ;
   for (let number in count) {
        if (count[number] > maxCount) {
            maxCount = count[number];
            result = number;
        }
    }

    return result;
}

console.log(findMostRepeat([1, 2, 3, 2, 2,2,2,2,2,2,2,2,2,1, 1, 4,1, 2, 3, 2, 1, 1, 4, 5, 101, 2, 3, 2, 1, 1, 4, 5, 10 , 10])); 
