//   async function getData(){

//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(455)
//       }, 3500);
//     }
//     )

// }

//FETCH API

async function getData(){
    //simulate getting data from server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    //FETCH USING POST METHOD
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
// .then((response) => response.json())   WHEN WE FETCH USING POST METHOD THIS STPS IS NOT REQUIRED
// .then((json) => console.log(json));
   data =  await x.json()
   return data
      

}

//SETTLE MEANS RESOLVE OR REJECT
// RESOLVE MEANS PROMISE HAS SETTED SUCCESSFULLY
//REJECT MEANS PROMISE HAS NOT SETTLED SUCCESFULLY


async function main(){
    console.log("Loading Moduless")

    console.log("Do somehting else")

    console.log("Load Data")
     let data = await getData()

      console.log(data)

      console.log("Process data")

      console.log("task 2")

}

main()
// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
  
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
  
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  
 
 ////THIS IS METHOD ONE = JB TK getDATA RESOLVE NI HOGA TB TK NICHE KA PROCESS NI HOGA .
// data.then((v) => {
//     console.log(data)

// console.log("Process data")

// console.log("task 2")
  
// }
// )
