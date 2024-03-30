#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let name = await inquirer.prompt([{
        name: "name",
        message: chalk.green("Enter your name"),
        type: "input"
    }]);
console.log(`${chalk.yellow(name.name)},WELCOME TO OUR TO DO NOTE BOOK WE ARE GLAD TO SEE HERE;`);
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input", //objects
            message: chalk.blue("what you want add mobile brand"),
        },
        {
            name: "addmore",
            type: "confirm",
            message: chalk.red("Do you want add more brand?"),
            default: "false"
        },
        {
            name: "remove",
            type: "confirm",
            message: "do you remove your last element",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    if (addTask.remove && todos.length > 0) {
        todos.pop();
        console.log("Last added brand removed.");
    }
    console.log(todos);
}
