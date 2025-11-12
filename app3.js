import fs from "fs/promises"
import rl from "readline-sync";

async function folder(){
    try{
        let fld = rl.question("enter folder name to delete : ")
        await fs.rmdir(fld)
        
        console.log("bhai folder delete ho");
    }catch (error) {
        console.log(error);
    }
}
folder()


async function delfolder(){
    try{
        let fld = rl.question("enter folder name to delete : ")
        await fs.rmdir(fld)
        
        console.log("bhai folder delete hogaya");
    }catch (error) {
        console.log(error);
    }
}
deletefolder()