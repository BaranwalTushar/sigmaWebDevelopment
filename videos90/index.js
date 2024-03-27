const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

app.use('/blog',blog)

//Middleware 1- Logger for our application 

app.use((req,res,next)=>{
    console.log(req.headers)
    req.tushar = "I am a Tushar Bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${date.now()} is a ${req.method}`)

    // res.send("Hacked by Middleware1") when we give res.send then there is no need of next()
     next()
})

//Middleware 2

app.use((req,res,next)=>{
    console.log('m2')
    req.tushar = "I am a Vaibhav Bhai";
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.tushar)
  })

  app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})