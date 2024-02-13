import inquirer, { Answers, QuestionCollection } from "inquirer";
import chalk from "chalk";

const currencies: QuestionCollection = [
  {
    name: "currency",
    type: "list",
    message: "Select your currency:",
    choices: ["USD", "SAR", "BHD"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter your amount:",
    validate: (input) => {
      const amount = parseFloat(input);
      return !isNaN(amount) && amount > 0 ? true : "Please enter a valid positive number";
    },
  },
];

const exchangeRates: { [key: string]: number } = {
  USD: 280,
  SAR: 75,
  BHD: 741,
};

inquirer.prompt(currencies).then((answers: Answers) => {
  const { currency, amount } = answers;
  const exchangeRate = exchangeRates[currency as keyof typeof exchangeRates];
  const convertedAmount = amount * exchangeRate;

  console.log(chalk.yellow(`You have ${convertedAmount.toFixed(2)} PKR`));
}).catch((error) => {
  console.error(chalk.red("An error occurred:", error));
});
