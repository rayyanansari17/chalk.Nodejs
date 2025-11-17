import os from "os";
import chalk from "chalk";

console.clear();
console.log(chalk.cyan.bold("====================================="));
console.log(chalk.cyan.bold("SYSTEM INFO CLI TOOL"));
console.log(chalk.cyan.bold("====================================="));

console.log(chalk.yellow.bold(`🖥  Platform:`, chalk.white(os.platform())));
console.log(chalk.yellow.bold(`🧪 OS Type:`, chalk.white(os.type())));
console.log(chalk.yellow.bold(`🔧 Release:`, chalk.white(os.release())));
console.log(chalk.yellow.bold(`📐 Architecture:`, chalk.white(os.arch())));
console.log(chalk.yellow.bold(`💻 Hostname:`, chalk.white(os.hostname())));

console.log(chalk.magenta.bold(`\n🧠 CPU Info`));
console.log(chalk.magenta(`Cores: ${os.cpus().length}`));
console.log(chalk.magenta(`Model: ${os.cpus()[0].model}`));

console.log(chalk.blue.bold(`\n📦 Memory Info`));
console.log(
  chalk.blue(`Total Memory: ${(os.totalmem() / 1024 ** 2).toFixed(2)} GB`)
);
console.log(
  chalk.blue(`Free Memory: ${(os.freemem() / 1024 ** 2).toFixed(2)} GB`)
);

console.log(chalk.green.bold(`\n🌐 Network Interfaces`));

let output = os.networkInterfaces();
// console.log(output );
for (let name of Object.keys(output)) {
  for (let output2 of output[name]) {
    if (output2.family === "IPv4") {
      console.log(chalk.green(`Interface ${name}: ${output2.address}`));
    }
  }
}

// console.log(chalk.red.bold(`\n⏱ Uptime (Seconds): ${os.uptime().toFixed(2)}`));
console.log(
  chalk.red.bold(
    `\n⏱ Uptime (Minutes): ${(os.uptime() / 60).toFixed(2)} minutes`
  )
);

console.log(chalk.yellow.bold(`\n🏠 Home Directory: ${os.homedir()}`));
console.log(chalk.yellow.bold(`📂 Temp Directory: ${os.tmpdir()}`));

console.log(
  chalk.greenBright.bold(`\n✔ System Info Retrieved Successfully!\n`)
);
