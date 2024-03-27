console.log("helo world")



// document.body
// <body>​<div class=​"container">​<div class=​"box">​box 1​</div>​<div class=​"box">​box 2​</div>​<div class=​"box">​box 3​</div>​<div class=​"box">​box 4​</div>​<div class=​"box">​box 5​</div>​</div>​<script src=​"index.js">​</script>​</body>​
// document.firstChild
// <!DOCTYPE html>
// document.body.firstChild
// #textassignedSlot: nullbaseURI: "http://192.168.1.3:3000/videos67/index.html"childNodes: NodeList []data: "\n\n    "firstChild: nullisConnected: truelastChild: nulllength: 6nextElementSibling: div.containernextSibling: div.containernodeName: "#text"nodeType: 3nodeValue: "\n\n    "ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n\n    "wholeText: "\n\n    "[[Prototype]]: Text
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]0: text1: div.container2: text3: script4: textlength: 5[[Prototype]]: NodeList
// document.body.childElementCount[0]
// undefined
// document.body.childNodes[1]
// <div class=​"container">​<div class=​"box">​box 1​</div>​<div class=​"box">​box 2​</div>​<div class=​"box">​box 3​</div>​<div class=​"box">​box 4​</div>​<div class=​"box">​box 5​</div>​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document
// undefined
// let cont= document.body.childNodes[1]
// undefined
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstChild
// #text
// cont.firstElementChild
// <div class=​"box">​box 1​</div>​
// cont.lastElementChild
// <div class=​"box">​box 5​</div>​


document.body.firstElementChild.firstElementChild
document.body.firstElementChild.firstElementChild.childNodes
document.body.firstElementChild.children

document.body.firstElementChild.children[0].previousElementSibling

//TABLE

// HTMLCollection(3) [div.container, table, script]
// document.body.children[1]
// <table>​<thead>​…​</thead>​<tbody>​…​</tbody>​</table>​
// document.body.children[1].rows


