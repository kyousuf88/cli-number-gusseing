#! /usr/bin/env code

import inquirer from "inquirer";

// 1 computer will generate a random number

// 2 user input for guessing number

// 3 compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random()* 6 + 1);


const answers  = await inquirer.prompt([
    {
         name: "userguessednumber",
         type: "number",
         message: "please guess a number between 1-10:",
}]);
if(answers.userguessednumber === randomNumber) {
    console.log("congratulation! you guess right number")
} else {
    console.log("you guessed wrong number")
}