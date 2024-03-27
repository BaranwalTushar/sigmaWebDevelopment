
// var slugify = require('slugify')

// let a = slugify('some string') // some-string

// // if you prefer something other than '-' as separator
//  const b = slugify('some string', '_')  // some_string
//  console.log(b)


const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});