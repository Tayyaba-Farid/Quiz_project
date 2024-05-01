#! /usr/bin/env node
import inquirer from "inquirer";
class student {
    name;
    marks;
    constructor(name) {
        this.name = name;
        this.marks = 0;
    }
    marksIncrease() {
        let marks = this.marks + 1;
        this.marks = marks;
    }
}
let name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please enter your name: ",
});
console.log(`${name.name}, let's begin the quiz!`);
async function quiz() {
    let question1 = await inquirer.prompt([
        {
            name: "Question1",
            type: "list",
            message: "Digital Banking can be resorted through: ",
            choices: ["Mobile phones", "Internet", "Telephones", "All of these"],
        },
    ]);
    let studentMarks = new student(name["name"]);
    if (question1.Question1 === "All of these") {
        console.log("Correct Answer!");
        studentMarks.marksIncrease();
    }
    else {
        console.log("Wrong Answer");
    }
    let question2 = await inquirer.prompt([
        {
            name: "Question2",
            type: "list",
            message: "What is the meaning of `Carry a chip on ones shoulder`: ",
            choices: [
                "Entertaining a grudge over a past event",
                "Moving daintily across rooms",
                "Having a plate inserted to fix the collar bone",
                "Carrying multiple stars over the lapel",
            ],
        },
    ]);
    if (question2.Question2 === "Entertaining a grudge over a past event") {
        console.log("Correct Answer!");
        studentMarks.marksIncrease();
    }
    else {
        console.log("Wrong Answer");
    }
    let question3 = await inquirer.prompt([
        {
            name: "Question3",
            type: "list",
            message: "Rishabh starts walking towards the west. After walking 70 m he turns to the left and walks 35 m straight. He turns left again and walks 30 m, again he turns to the left and walks a distance of 35 m. How far is he from the starting point?",
            choices: ["60m", "10m", "70m", "40m"],
        },
    ]);
    if (question3.Question3 === "40m") {
        console.log("Correct Answer!");
        studentMarks.marksIncrease();
    }
    else {
        console.log("Wrong Answer");
    }
    let question4 = await inquirer.prompt([
        {
            name: "Question4",
            type: "list",
            message: "The amount of time required by a storage device to retrieve data and programs is it: ",
            choices: ["retrieval speed", "capacity", "memory", "storage"],
        },
    ]);
    if (question4.Question4 === "retrieval speed") {
        console.log("Correct Answer!");
        studentMarks.marksIncrease();
    }
    else {
        console.log("Wrong Answer");
    }
    let question5 = await inquirer.prompt([
        {
            name: "Question5",
            type: "list",
            message: "An article is sold at 5% profit. The ratio of selling price and cost price will be?",
            choices: ["1:5", "20:21", "21:20", "5:1"],
        },
    ]);
    if (question5.Question5 === "21:20") {
        console.log("Correct Answer!");
        studentMarks.marksIncrease();
    }
    else {
        console.log("Wrong Answer");
    }
    if (studentMarks.marks === 5) {
        console.log(`${name.name}, your total marks are ${studentMarks.marks} out of 5! Excellent Job!`);
    }
    else {
        console.log(`${name.name}, your total marks are ${studentMarks.marks} out of 5!`);
    }
}
quiz();
