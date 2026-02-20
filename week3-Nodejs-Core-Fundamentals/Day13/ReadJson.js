const fs=require('fs/promises');

async function readData() {

    const path=require("path");
    const filePath=path.join(__dirname,"data.json");

    const data=await fs.readFile(filePath,"utf-8");
    //Convert string to object
    const parsed=JSON.parse(data);

    console.log(parsed.name);
    console.log(parsed.Age);
    
}

readData();