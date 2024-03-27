import fs from "fs/promises"

let a  = await fs.readFile("tushar.txt")
console.log(a.toString())
let b = await fs.appendFile("tushar.txt","\ntushar is a smart  and hardworking")
console.log(a,toString,)