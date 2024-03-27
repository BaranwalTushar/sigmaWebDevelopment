let arr = [1,2,3,4,5]

// newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
// console.log(newArr)

// OR

// let newArr = arr.map((e)=>{
//     return e**2
// })
// console.log(newArr)


//FILTER

// let newArr = [1,2,4,7,9]

// const greaterThanSeven = (e)=>{
//     if(e>4){
//         return true
//     }
//     return false
// }
// console.log(newArr.filter(greaterThanSeven))

//REDUCE

let newArr = [1,2,3,4]
const multiply = (a,v) =>{
    return a*v
}
console.log(newArr.reduce(multiply))


let a = Array.from("Tushar") // this convert a string in an array
console.log(a)