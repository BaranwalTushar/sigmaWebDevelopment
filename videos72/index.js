console.log("my script is working")


let boxes = document.querySelector(".container").children

 function getrandom(){
    let val1 = Math.ceil(0 + Math.random()*240);
    let val2 = Math.ceil(0 + Math.random()*250);
    let val3 = Math.ceil(0 + Math.random()*230);

    return `rgb(${val1}, ${val2}, ${val3})`
 }

 Array.from(boxes).forEach(e=>{

    e.style.backgroundColor = getrandom()
    e.style.Color = getrandom()
 })