const fs=require('fs');

//Sync
fs.writeFileSync('./test.txt',"Hey There");

fs.writeFile("./test1.txt","Hello Async",(err)=>{
    if(err) console.log(err);
    else console.log("Files written successfully!!!");
    
});

const path=require('path');
const filePath=path.join(__dirname,"contact.txt");

const result = fs.readFileSync(filePath,"utf-8");
console.log(result);
    
// 
fs.readFile(filePath,"utf-8",(err,result)=>{
    if (err) {
        console.log("Error: ",err);
    } else {
        console.log(result);
    }
});


// fs.appendFileSync(filePath,"17-02-2026")
// fs.appendFileSync(filePath,new Date().getDate().toLocaleString())

// //Copy the file
// fs.copyFileSync(filePath,"copy.txt");

// //Delete the file
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync(filePath).isFile());

// fs.mkdirSync("my-docs");


console.log("Dirname: ",__dirname);
console.log("Filename: ",__filename);

console.log(path.resolve("file.js"));

console.log("process.argv: ",process.argv);
console.log("process.cwd: ",process.cwd());

process.on("BeforeExit",(code)=>{
    console.log("Before exit event",code);
})

process.on("exit",(code)=>{
    console.log("process exit even with code ",code);
    
})

console.log(process.argv);
console.log(process.argv[2] || "Guest" );


//Write async file 

fs.writeFile(filePath,"Hello",(err)=>{
    console.log("File Done");
});

console.log("Doneee");
