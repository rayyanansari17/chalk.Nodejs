import chalk from "chalk";
import os from "os"

let output = os.networkInterfaces()
// console.log(output );
for(let name of Object.keys(output)){
    for(let output2 of output[name]){
        if(output2.family === "IPv4"){
            console.log(chalk.green(`Interface ${name}: ${output2.address}`));
        }
    }
}






