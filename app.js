const yargs = require("yargs");
const commands = require("./commands");

let command = yargs.argv._[0];
let task = yargs.argv.task;
let time = yargs.argv.time;

if (command === "add") {
  if (task && time) {
    commands.add(task, time);
  }
} else if (command == "remove") {
  if (task) {
    commands.remove(task);
  }
} else {
  console.log("can not be added");
}
