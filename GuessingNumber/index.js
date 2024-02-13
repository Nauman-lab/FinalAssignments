import inquirer from "inquirer";
import chalk from "chalk";
const systemGeneratedNumber = Math.floor(Math.random() * 10) + 1;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 and 10:",
        validate: (input) => {
            const number = parseInt(input);
            if (isNaN(number) || number < 1 || number > 10) {
                return "Please enter a valid number between 1 and 10.";
            }
            return true;
        },
    },
]);
const { userGuessedNumber } = answers;
console.log(chalk.yellow("System Generated Number:"), systemGeneratedNumber, chalk.blue("User Guessed Number:"), userGuessedNumber);
if (userGuessedNumber === systemGeneratedNumber) {
    console.log(chalk.green("Congratulations! Your guess is correct. You win!"));
}
else {
    console.log(chalk.red("Sorry, your guess is incorrect. Better luck next time!"));
}
