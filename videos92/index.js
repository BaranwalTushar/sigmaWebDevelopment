const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName =  "Adidas"
  let searchText = "Search Now"
  let arr = ["Hey", 45 , 65]
  res.render("index",{siteName:siteName,searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle =  "Adidas Why and When"
  let blogContent = "Its  a  Very brand"
  res.render("templates/blogpost.html",{blogTitle:blogTitle,blogContent:blogContent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})