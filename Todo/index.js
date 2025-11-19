import { readFileSync, writeFileSync } from "fs";
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task Added ", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index} - ${task.task}`));
};

const removeTask = (index) => {
  const tasks = loadTasks();

  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task index!");
    return;
  }

  const removedTask = tasks.splice(index, 1)[0];
  saveTasks(tasks);
  console.log("Task Removed: ", removedTask.task);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found !");
}
