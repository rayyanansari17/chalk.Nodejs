import rl from "readline-sync"
import ck from "chalk"

console.clear();
console.log(ck.red("===================================="));
console.log(ck.red.bold("📷 Instagram login Page 📷"));
console.log(ck.red("===================================="));


let username = rl.question(ck.blue("🙍 Enter username : "))
let password = rl.question(ck.yellow("🔒Enter your password :"), 
    {hideEchoBack:true,

    })


console.log(ck.grey("\n\nChecking Credentials......." ));

if (password == "Rayyan@123" && username){
    console.log(ck.green("\nlogin successfull"));
    console.log(ck.bold(`Welcome back ${username}`));
} else {
    console.log(ck.red("\nLogin Failed"));
}

console.log(ck.magenta("\n\nThankyou for visiting this page!!"));