console.log("====baitap1===");
let names = ["John", "Alice"]
names.push("Tom");
console.log(names);
console.log("====baitap2===");
let numbers = [1, 2, 3, 4, 5]; 
numbers = numbers.map(function(num){return num*num});
console.log(numbers);
console.log("====baitap3===");
let numbers2 = [5, 10, 15, 20, 25];
numbers2 = numbers2.filter(function(num){return num %2===0});
console.log(numbers2);
console.log("====baitap4===");
const arr4 = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
 const result = arr4.find((item) => item.score > 8);
 console.log(result);
console.log("====baitap5===");
const arr5 = [3, 5, 8, 12, 15];
const result5= arr5.findIndex((item) => item > 10);
console.log(result5);
console.log("====baitap12===");
let names2 = ["John", "Alice", "Bob"];
let newNames = names2.map(function(name){return name.toUpperCase()});
console.log(newNames);
console.log("====baitap13===");
let numbers3 = [1, 2, 3, 4, 5, 6];
numbers3 = numbers3.filter(function(num){return num % 2 === 0});
let sum= numbers3.reduce(function(accumulator, currentValue){return accumulator + currentValue}, 0);
console.log(sum);
console.log("====baitap14===");
const  arr6 =[1, 2, 2, 3, 4, 4, 5];
const result6 =[];
for( let i=0; i<arr6.length; i++){
    const element = arr6[i];
    const existedItem = result6.find((item) => item === element);
    if (!existedItem) {{
        result6.push(element);

    }}
}
console.log(result6);

console.log("====baitap15===");;
const arr7 = ['a', 'b', 'a', 'c', 'b', 'a']
const result7 = {};
arr7.map(item => {
    if (!result7[item]) {
        result7[item] = 1;}
    else {
        result7[item]++;
    }}
);console.log(result7);