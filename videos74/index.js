let button  = document.getElementById("btn")


https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("dblclick",()=>{
    // alert("yeah its working")

    document.querySelector(".box").innerHTML = "<b> hi it cahnge the contect on clicking </b>"
})

button.addEventListener("contextmenu",()=>{
     alert("Dont hack us by clicking right")

})



