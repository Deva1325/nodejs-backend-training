const math=require("./math.js");
const math2=require("./math2.js");
const {add, sub} = require("./math.js");
 
console.log(math);

//1 way
console.log("Addition :",math.add(2,3));
console.log("Substraction :",math.sub(5,2));



//2 way

console.log("Add2",add(2,3));
console.log("Sub2",sub(2,3));


//Exports way 1

//1 way
console.log("-------Exports way 1------------------");

console.log("Addition :",math2.add(2,3));
console.log("Substraction :",math2.sub(5,2));