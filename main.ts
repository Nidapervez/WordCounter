#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answer:{
    Sentence:string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type:"Input",
        message:"Enter the sentence to count the words"
}
])
const word= answer.Sentence.trim().split(" ")
console.log(chalk.bgMagenta(word));
console.log(`Your sentence word count is ${word.length}`);

