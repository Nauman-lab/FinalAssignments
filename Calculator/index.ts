import inquirer, { Answers, QuestionCollection } from "inquirer";
import chalk from "chalk";

const questions: QuestionCollection = [
  {
    name: "num1",
    type: "number",
    message: "Enter number1:",
  },
  {
    name: "num2",
    type: "number",
    message: "Enter number2:",
  },
  {
    name: "operator",
    type: "list",
    message: "Select an operator:",
    choices: ["*", "+", "-", "/"],
  },
];

const answers: Promise<Answers> = inquirer.prompt(questions);

answers
  .then((answers: Answers) => {
    const { num1, num2, operator } = answers;

    let result;
    switch (operator) {
      case "*":
        result = num1 * num2;
        console.log(chalk.blue(`${num1} * ${num2} = ${result}`));
        break;
      case "+":
        result = num1 + num2;
        console.log(chalk.green(`${num1} + ${num2} = ${result}`));
        break;
      case "-":
        result = num1 - num2;
        console.log(chalk.red(`${num1} - ${num2} = ${result}`));
        break;
      case "/":
        if (num2 === 0) {
          console.log(chalk.yellow("Cannot divide by zero!"));
        } else {
          result = num1 / num2;
          console.log(chalk.yellow(`${num1} / ${num2} = ${result}`));
        }
        break;
      default:
        console.log("Invalid operator");
        break;
    }
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
