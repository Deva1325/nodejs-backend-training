const fs=require('fs');

console.log("Script started");


setTimeout(() => console.log("setTimeout MacroTask - Run after 0ms"),0);

fs.readFile(__filename,()=>{
    console.log("File read (I/O operation) ");
});

Promise.resolve().then(()=>console.log("Promise - High Priority"));

process.nextTick(()=> console.log("process.nextTick - The VIP Microtask"));

setImmediate(()=>console.log("setImmediate calls"));

console.log("Script ended");
