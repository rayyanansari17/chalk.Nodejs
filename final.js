import fs from "fs/promises"
import rl from "readline-sync"


async function finalmethod(){
    try {
        let folderName = "test"
        let fileName = "hi.text"
        let rename = "bye.txt"
        let fileContent = "hello CFi students"
        let filePathls = "/home/rayyan/chalk.Nodejs"

        // 1. create folder

    // await fs.mkdir(folderName)
    // console.log("folder created");

    // 2. delete a folder
    // await fs.rmdir(folderName);
    // console.log("folder deleted");
    
    
    // 3. File Create
    // await fs.writeFile(fileName, fileContent);
    // console.log("file create and content added");

    // 4. Read file
    // let output = await fs.readFile(fileName, "utf-8");
    // console.log(output);

    // 5. Rename File
    // await fs.rename(fileName, rename);
    // console.log("file renamed")

    //6. delete file
    // await fs.unlink(rename);
    // console.log("file deleted");

    // 7. List files
    // let list = await fs.readdir(filePathls);
    // console.log(list);

    // 8. update file
    await fs.appendFile(fileName, "\nHELLO HI BYE");
    console.log("file updated");

    } catch (error) {
        
    }
}
finalmethod()