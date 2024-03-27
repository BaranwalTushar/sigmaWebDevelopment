
use('sigmadatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": 20000,
      "instructor": "TusharVaisno"
    },
    {
      "name": "python",
      "price": 15000,
      "instructor": "JohnDoe"
    },
    {
      "name": "javascript",
      "price": 18000,
      "instructor": "JaneSmith"
    },
    {
      "name": "c++",
      "price": 25000,
      "instructor": "AlexJohnson"
    },
    {
      "name": "ruby",
      "price": 17000,
      "instructor": "EmilyBrown"
    },
    {
      "name": "php",
      "price": 16000,
      "instructor": "ChrisTaylor"
    },
    {
      "name": "html",
      "price": 12000,
      "instructor": "SophieMiller"
    },
    {
      "name": "css",
      "price": 11000,
      "instructor": "MichaelClark"
    },
    {
      "name": "c#",
      "price": 22000,
      "instructor": "RachelWhite"
    },
    {
      "name": "typescript",
      "price": 19000,
      "instructor": "SamuelGreen"
    }
  ]
  );


console.log(`done  inserting data`);


