const fs=require('fs');

fs.writeFileSync("demo.txt","Hey, I'm in the demo file")

const data=fs.readFileSync("demo.txt","utf-8");

console.log("Demo File: ",data);
console.log("This runs after files run");

//Async File 

