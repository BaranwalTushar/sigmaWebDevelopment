let a = prompt("enter a  first number")
let b = prompt("enter second number")

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("sorry! this is not allowed")
}

let sum = parseInt(a) + parseInt(b)



try {
    console.log(sum*x)  
} catch (error) {
    console.log("Error occured")
}
