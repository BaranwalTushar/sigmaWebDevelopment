const { error } = require("console")
const fs = require("fs")
//promise in commonjs
// const fs = require("fs/promises")
console.log(fs)

console.log("starting")

fs.writeFile("tushar.txt","tushar is a good boy",()=>{
    console.log("done")
    fs.readFile("tushar.txt",(error,data)=>{
        console.log(error,data.toString())
    })

})

fs.appendFile("tushar.txt","_tusharvaisno",(e,d)=>{
    console.log(d)
})
console.log("end")