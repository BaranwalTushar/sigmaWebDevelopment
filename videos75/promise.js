console.log("This is a Promise")

let prom1 = new Promise((resolve,reject) => {

    let a  = Math.random();
    // console.log(a)
    if(a<0.5){
        reject("No Randon no. is not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done ") 
            resolve("Tushar")
         }, 3000);
     }
    })

    // .catch((error) => {
    //     console.log(error)
    //   }
    // )
    
    let prom2 = new Promise((resolve,reject) => {
      let a = Math.random();
      if(a<0.5){
        reject("No Randon no. is not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log("yes i am also done 2")
            resolve("tushar 2")
        }, 1000);
    }
   })
  //THIS IS USING FOR ALL PROMISING IN SINGLE TIME AND MORE METHOD ARE THERE IN NOTES
   let p3 = Promise.all([prom1,prom2])
    p3.then((a) => {

      console.log(a)

    }
    ).catch((err) => {
          console.log(err)      
    }
    )
   

   
    
  
   

// prom1.then((a) => {
//    console.log(a)
// }
// )