const fs=require('fs');

const data=fs.readFile("demo.txt","utf-8",(err,data)=> {
    if (err) {
        console.log("error: ",err);
        return ;
    }else{
        console.log("data: ",data);
    }
});

console.log("This runs first before async fun:");
