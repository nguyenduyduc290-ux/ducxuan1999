let names = ["duc","thuan","xuan","duong","my"]
console.log(names[3]);
names [0]= "phuong"
console.log(names);
const deleteIndex =2;
for(let i= deleteIndex;i<names.length;i++){
names[i]=names[i+1];

}names.length =names.length -1;
console.log(names.length)

    
