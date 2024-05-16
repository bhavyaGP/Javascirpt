//name iife
(function (name){
    console.log("This Immediately Invoked Function Expressions ",name)
})("IIFE");

// ; termination of function execution



((name1)=>{
    console.log("This second ",name1)
})("IIFE");