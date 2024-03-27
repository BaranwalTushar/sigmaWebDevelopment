use("cruddb")
db.createCollection("courses")
db.courses.insertOne({
    name:"Tushar web development",
    price:0,
    project:45
})

// db.courses.insertMany(
//     [
//         {
//           "name": "java",
//           "price": 20000,
//           "instructor": "TusharVaisno"
//         },
//         {
//           "name": "python",
//           "price": 15000,
//           "instructor": "JohnDoe"
//         },
//         {
//           "name": "javascript",
//           "price": 18000,
//           "instructor": "JaneSmith"
//         },
//         {
//           "name": "c++",
//           "price": 25000,
//           "instructor": "AlexJohnson"
//         },
//         {
//           "name": "ruby",
//           "price": 17000,
//           "instructor": "EmilyBrown"
//         },
//         {
//           "name": "php",
//           "price": 16000,
//           "instructor": "ChrisTaylor"
//         },
//         {
//           "name": "html",
//           "price": 12000,
//           "instructor": "SophieMiller"
//         },
//         {
//           "name": "css",
//           "price": 11000,
//           "instructor": "MichaelClark"
//         },
//         {
//           "name": "c#",
//           "price": 22000,
//           "instructor": "RachelWhite"
//         },
//         {
//           "name": "typescript",
//           "price": 19000,
//           "instructor": "SamuelGreen"
//         }
//       ]
      
// )

let a = db.courses.find({
    price:0
})
console.log(a.toArray())

//Update

db.courses.updateOne({price:0},{$set:{price:100}})
//Delete

db.courses.deleteOne({price:100})
