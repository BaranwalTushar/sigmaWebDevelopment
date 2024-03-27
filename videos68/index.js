console.log("hello world")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "red"

// document.getElementById("box3")
// document.getElementById("box3").style.backgroundColor = "green"
// document.querySelectorAll(".box")
// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "red"
// });

let e = document.getElementsByTagName("div")

e[4].matches("box")
// // t = document.getElementsByTagName("div")
// HTMLCollection(6) [div.container, div.box, div.box, div#box3.box, div.box, div.box, box3: div#box3.box]
// t[4].matches(".box")
// true


//THIS REPRESENT THE COLOSEST ITEM
// e[2].closest(".box")
// <div class=​"box">​Tushar 2​</div>​
// e[2].closest("body")
// <body>​<div class=​"container">​…​</div>​<script src=​"index.js">​</script>​</body>​
// e[2].closest("html")

//CONTAINS PROPERTY

document.querySelector(".container").contains(t[1])
//output - True

document.querySelector(".container").contains(document.querySelector("body"))
// output = false  becuse container not contains the body body contains the contaimer

document.querySelector("body").contains(document.querySelector(".container"))
//output = true