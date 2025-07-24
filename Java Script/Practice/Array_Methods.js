// Double each number in an array ; 

const arr = [1,2,3,4,5] ;
const modArray = arr.map((element)=>element*2) ;
console.log(modArray);

// filter Names starting with A 

const names = ['Ali', 'Sara', 'Ahmed', 'Bilal'];
const modArray1 = names.filter((element) => element[0] === "A") ;
console.log(modArray1);

// Get Sum of All Prices 

const products = [
  { name: 'Book', price: 100 },
  { name: 'Pen', price: 20 },
  { name: 'Bag', price: 500 }
];

const modArray2 = products.reduce((acc , current) => current.price + acc , 0);
console.log(modArray2)


const simpleArray = ["Hello" , "Hi" , "Fine" , "Pedal"] ;
simpleArray.sort() ;
console.log(simpleArray) ;
simpleArray.reverse() ;
console.log(simpleArray.toReversed());
console.log(simpleArray);