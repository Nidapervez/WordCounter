#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "Input",
        message: "Enter the sentence to count the words:"
    }
]);
const word = answer.Sentence.trim().split(" ");
console.log(chalk.bgMagenta(word));
console.log((chalk.bgGreen(`Your sentence word count is ${word.length}`)));
