let  first,second,third;

let rand  = Math.random()
 if(rand<0.33){
    first = "lazy"
 }
 else if(rand<0.66 && rand>=0.33){
    first = "fit"
 }
 else{
    first = "fast"
 }
 if(rand<0.33){
    second = "man"
 }
 else if(rand<0.66 && rand>=0.33){
    second  = "girk"
 }
 else{
    second =" boy"
 }
 if(rand<0.33){
    third = "loss"
 }
 else if(rand<0.66 && rand>=0.33){
    third  ="grow"
 }
 else{
    third = "rich"
 }


 console.log("the business generator name is "+ `${first} ${second} ${third}`)