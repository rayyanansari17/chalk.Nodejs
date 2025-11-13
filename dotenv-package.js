// dotenv package

/*

dotenv is a node.js package that loads environment varialbes from .env file into process.env

this is usefull because 

-- you dont want secrets (APIs keys,db passwords) inside your code
-- you want different config for dev, staging, production
-- you want clean, maintainable configuration 


Installation :

npm i dotenv 

should have :

import dotenv from "dotenv"
dotenv .config()

to access from .env file 

= process.env.KEYVALUE

*/




import env from "dotenv"
env.config()

let fname = process.env.FNAME
let age = process.env.AGE
let college = process.env.COLLEGE
let phn = process.env.PHN
let pass = process.env.PASS


console.log("\n",fname, "\n",age,"\n",college,"\n",phn,"\n",pass);