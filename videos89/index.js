const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 4000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)



// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    console.log("hi its a get request")
    res.send('Hello World23!')
})
app.post('/', (req, res) => {
    console.log("hi its a post request")
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("hi its a put request")
    res.send('Hello World Put!')
})

app.delete('/', (req, res) => {
    console.log("hi its a delete request")
    res.send('Hello World delete!')
})

app.get("/index",(req,res)=>{
    console.log("hey its index")
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api",(req,res)=>{
    res.json({a:1,b:2,name:["Tushar","vaisno"]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})