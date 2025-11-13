// OS Module in Node.js

/*
node js comes with a built-in module called os that provides information about your computer's operating system.

you dont need to install anything, just import it:
ex: import os from "os"

*/

import os from "os"


// to identify which os 
console.log(`Platform : ${os.platform()}`);


// to identify architecture 

console.log(`Architecture : ${os.arch()}`);

// to check how many cpus 
console.log(`CPUs : ${os.cpus()}`);

// total memory 
console.log(`total memory : ${os.totalmem()}`);


