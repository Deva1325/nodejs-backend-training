const fs=require('fs/promises');

async function run() {
    try {

        const path=require("path");
        const filepath=path.join(__dirname,"data.txt");

        const data=await fs.readFile(filepath,"utf-8");
        console.log("Data: ",data);

        await fs.writeFile("./copy.txt",data);

        console.log("Files copied successfully!");
        
        
    } catch (error) {
        console.log("Error:",error.message);
        
    }
}

run();