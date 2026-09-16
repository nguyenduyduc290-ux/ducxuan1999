// const student ={name:"john",age:20}
// student.major="computer science"
// console.log(student)
// const person = { name: "Alice", age: 25, job: "Designer" };

// delete person.job="Designer"
// console.log(person);

// const  car = { brand: "Toyota", model: "Camry", year: 2020 }
// car.age=19;
// delete car .model
// let count=0;
// for (const key in car){
//     count++;
// }
// console.log(count);
console.log(`cau 4`)
const  product = { name: "Laptop", price: 1000 }
const resultProduct=[];
for (const key in product ){
    const mapkey =[key,product[key]];
    resultProduct[resultProduct.length]=mapkey;
}
console.log(resultProduct);

console.log(`cau5`)
const  products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
const searvalue= "Camera";
for(let i=0;i<products.length;i++){
    const item=products[i];
    if (item.name === searvalue){
        console.log(item);
        break;
    }
}

console.log(`cau 6`)
const  products = [ { name: "Phone", price: 50 },
     { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
     const resultproduct=[],
     for(let i=0 ;i<product.length;i++;){
        const item = product[i];
        if( item.price >100){
            resultproduct[resultproduct.length]=item;
        }
        
     }
     console.log(resultproduct)


