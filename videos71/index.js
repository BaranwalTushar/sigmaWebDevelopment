// document.querySelector(".box")
// <div class=​"box">​i am a box​</div>​
// document.querySelector(".box").innerHTML
// 'i am a box'

// '\n        <div class="box">i am a box</div>\n    '
// document.querySelector(".container").innerText
// 'i am a box'


// document.querySelector(".container").hidden = true
// true

// document.querySelector(".container").innerHTML = "hey i am vaisno"
// output = hey i am vainso   for change the inner html



// document.querySelector(".box").setAttribute("style","display: inline")
// undefined
// document.querySelector(".box").getAttribute("style")
// 'display: inline'
// document.querySelector(".box").hasAttribute("style")
// true

// document.designMode = "on"

// document.querySelector(".box").dataset
// output = created by: tushar

let div = document.createElement("div");
div.innerHTML = "ihave been inserted  <b>by tushar<b>"
div.setAttribute("class","created")
document.querySelector(".box").append(div)

let div2 = document.createElement("div");
div2.innerHTML = "ihave been inserted  <b>by vaiso<b>"
div2.setAttribute("class","created")
document.querySelector(".container").before(div2)

let div3 = document.createElement("div");
div3.innerHTML = "ihave been inserted  <b>by vaibhav<b>"
div3.setAttribute("class","created")
document.querySelector(".container").after(div3)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b>hey i leve my mom too much and i am serious </b>")

let cont1 = document.querySelector(".container")
cont1.insertAdjacentHTML("afterbegin","<b>hey i leve my mom too much and i am serious </b>")


//TOGGLE
// document.querySelector(".box").classList.toggle("green")
// true
// document.querySelector(".box").classList.toggle("green")
// false