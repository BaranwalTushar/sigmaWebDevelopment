console.log("tushar is a good boy")

console.log("I am a hack")
setTimeout(() => {

    console.log("I am in Timeout")
    
}, 2000);

setTimeout(() => {
    console.log("I am also In timeout2")
}, 2000);

console.log("The end")

//Call Back Function

const fn = () => {
  console.log("Nothing")
}


const callback = (arg,fn) => {
    console.log(arg)
    fn()
  
}


const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;

  sc.onload = callback("Harry",fn)
  document.head.append(sc)
  


}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
