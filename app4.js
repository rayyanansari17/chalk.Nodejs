import fs from "fs/promises"
import rl from "readline-sync"


// async function makeFile(){
//     try {
//         let fileName = rl.question("Enter file name : ")
//         let fileContent = rl.question("enter file content : ")

//         await fs.writeFile(fileName, fileContent)
//         console.log("\nFile is created with the content ");
//     } catch (error) {
//         console.log(error);
//     }
// }
// makeFile()



// async function delFile(){
//     try {
//         let fileName = rl.question("Enter file name : ")
//         // let fileContent = rl.question("enter file content : ")

//         await fs.unlink(fileName)
//         console.log("\nFile is deleted ");
//     } catch (error) {
//         console.log(error);
//     }
// }
// delFile()



async function renameFile(){
    try {
        let fileName = rl.question("Enter file name : ")
        let newName = rl.question("enter new file name  ")

        await fs.rename(fileName, newName)
        console.log(`\nFile name is changed with ${newName}`);
    } catch (error) {
        console.log(error);
    }
}
renameFile()