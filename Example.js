class Task {
  constructor(id, description, status) {
    this.id = id;
    this.description = description;
    this.status = status;
  }
}

// const task1 = new Task(1, 'Cleaning', 'Completed');
// const task2 = new Task(2, 'Service', 'InProgress');
// const task3 = new Task(3, 'Delivery', 'Completed');

class TaskManager {
  constructor() {
    this.taskArray = [];
    this.taskId = 1;
    this.status = 'inComplete';
    this.welCoeMsg = 'Hello , Lets get started!!';
  }

  addTask(desc) {
    const task = new Task(this.taskId, desc, this.status);
    this.taskArray.push(task);
    console.log(`${desc} has been added to the list`);
    this.taskId++;
  }

  viewTask() {
    if (this.taskArray.length === 0) {
      console.log('No task is Found.. please add tasks to the List');
    } else {
      this.taskArray.forEach((task) =>
        console.log(`${task.id} : ${task.description}`)
      );
    }
  }

  deleteTask(id) {
    const index = this.taskArray.findIndex((task) => task.id === id);
    if (index === -1) {
      console.log('Invalid Task');
    } else {
      const deletedTask = this.taskArray.splice(index, 1);
      console.log(`${deletedTask.description} has been removed from the list`);
    }
  }
  updateTask() {}
}

const displayMenu = () => {
  console.log('task tracking System');
  console.log('1: Add task');
  console.log('2: view task');
  console.log('3: dele task');
  console.log('4: update task');
  console.log('5: Exit');
  const choice = prompt('Enter your choice from 1-5');
  handleMenuChoice(choice);
};
const handleMenuChoice = (choice) => {
  switch (choice) {
    case '1':
      addTaskFromPrompt();
      break;
    case '2':
      viewTaskFromPrompt();
      break;
    case '3':
      deleteTaskFromPrompt();
      break;
    case '4':
      updatedTaskFromPrompt();
      break;
    case '5':
      exitedTaskFromPrompt();
      break;
    default:
      console.log('Invalid Choice.. please enter the number from 1-5');
      displayMenu();
  }
};
const taskManager = new TaskManager();
const addTaskFromPrompt = () => {
  const description = prompt('Enter your task');
  taskManager.addTask(description);
  displayMenu();
};

const viewTaskFromPrompt = () => {
  taskManager.viewTask();
  displayMenu(0);
};

const deleteTaskFromPrompt = () => {
  const taskId = prompt('please enter the taskId to delete');
  taskManager.deleteTask(taskId);
  displayMenu();
};

const updatedTaskFromPrompt = () => {};
displayMenu();
