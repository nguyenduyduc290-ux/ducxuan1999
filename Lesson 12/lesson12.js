const inputText = document.querySelector("input.inputText");
const btnAdd = document.querySelector("button.btnAdd");
const content =document.querySelector("div.content")
btnAdd.onclick =()=>{
    const value = inputText.value;
   const    newElement = `<p><input type ="checkbox"/> ${value}`;
content.innerHTML += newElement ;
};