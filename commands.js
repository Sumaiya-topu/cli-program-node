const fs = require("fs");

const add = (task, time) => {
  let todoList = [];
  try {
    todoList = JSON.parse(fs.readFileSync("todoList.json"));
  } catch (e) {
    // console.log(e);
  }

  let index = todoList.findIndex((i) => i.task === task);
  console.log(index);

  if (index === -1) {
    todoList.push({ task, time });
    console.log(todoList);
  } else {
    todoList[index].time += time;
  }

  fs.writeFileSync("todoList.json", JSON.stringify(todoList));
};

const remove = (task) => {
  let todoList = [];
  try {
    todoList = JSON.parse(fs.readFileSync("todoList.json"));
  } catch (e) {
    // console.log(e);
  }

  const filteredList = todoList.filter((i) => i.task !== task);
  fs.writeFileSync("todoList.json", JSON.stringify(filteredList));
};

module.exports = { add, remove };
