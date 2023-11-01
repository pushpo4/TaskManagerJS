class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    listTasks() {
        this.tasks.forEach((task, index) => {
            const status = task.completed ? 'Completed' : 'Not Completed';
            console.log(`${index + 1}. Title: ${task.title}, Description: ${task.description}, Status: ${status}`);
        });
    }
}

const taskManager = new TaskManager();

const task1 = new Task('Buy groceries', 'Milk, eggs, and bread');
const task2 = new Task('Write code', 'Finish the JavaScript project');
const task3 = new Task('Exercise', 'Go for a run');

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

taskManager.listTasks();

console.log('Marking task 2 as completed...');
taskManager.tasks[1].markAsCompleted();

taskManager.listTasks();
