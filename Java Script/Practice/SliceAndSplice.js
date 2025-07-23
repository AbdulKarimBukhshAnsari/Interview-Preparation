let arr = ["a" , "b" , "c" , "d"] ;
let arr1 = arr.slice(0,2) ;
console.log("Modified Array after Slice",arr1) // ["a" , "b"] -> Expected
console.log("Old Array" , arr) ; // ["a" , "b" , "c" , "d"] -> Expected 
let arr2 = arr.splice(1,2) ;  
console.log("Modified Array by using Splice" , arr2) ; // ["b" , "c" ] -> Expected 
console.log("Old Array" , arr); // ["a" , "d"] -> Expected 

// Old Expected output was right 