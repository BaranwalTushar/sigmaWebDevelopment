console.log("hi i am tushar")
  let age = 45
  if(age>45){
    console.log("you can  drive")

}
else{
    console.log("you can not")
}
//  All loop concept
let a  = 1;
for (let i = 0; i < 20; i++) {
    console.log(a+i)
    
}
//For Key in loop

let obj = {
    name : "harry",
    role : "developer",
    company : "my company"
}

for (const key in obj) {
    
         const element = obj[key];
        console.log(key,element);
        
    }

    //for of loop
    for (const c of "harry") {
        console.log(c)
    }

// while loop

let i=2
    while(i<6){
         
        console.log(i)
        i++;
    }