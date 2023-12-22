import inquirer from "inquirer";
import chalk from "chalk";
const error = chalk.bold.red;
const success = chalk.bold.green;
calculator();
/* -------------------------------------------------------------------------- */
/*                            Logics for calculator                           */
/* -------------------------------------------------------------------------- */
async function calculator() {
    const operation = await askOperationChoice();
    if (operation === "Quit") {
        console.log("Thank you for using the CLI calculator by Hassan Farooq");
        return;
    }
    else {
        const num1 = await askNumber("Enter 1st number: ");
        const num2 = await askNumber("Enter 2nd number: ");
        let result;
        if (operation === "Addition") {
            result = num1 + num2;
        }
        else if (operation === "Subtraction") {
            result = num1 - num2;
        }
        else if (operation === "Multiplication") {
            result = num1 * num2;
        }
        else if (operation === "Division") {
            num2 === 0 ? result = "Infinity" : result = num1 / num2;
        }
        else if (operation === "Modulus") {
            result = num1 % num2;
        }
        else if (operation === "Exponent") {
            result = num1 ** num2;
        }
        else if (operation === "Square Root") {
            result = Math.sqrt(num1);
        }
        else {
            result = 0;
        }
        console.log(success(`Result of ${num1} ${getSymbol(operation)} ${num2} is ${result}`));
        wantToContinue();
    }
}
function wantToContinue() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "continue",
            message: "Do you want to continue?",
        },
    ]).then((answers) => {
        if (answers.continue) {
            calculator();
        }
        else {
            console.log("Thank you for using the CLI calculator by Hassan Farooq");
        }
    });
}
//to Ask for operation
async function askOperationChoice() {
    const operationsList = [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulus",
        "Exponent",
        "Square Root",
        "Quit"
    ];
    var userInput = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Select the operation: ",
            choices: operationsList,
        },
    ]);
    return userInput.operation;
}
//to Ask for number
async function askNumber(string) {
    var userInput = await inquirer.prompt([
        {
            type: "number",
            name: "number",
            message: string ?? "",
        },
    ]);
    if (isNaN(userInput.number)) {
        console.log(error("Please enter a valid number"));
        return askNumber(string);
    }
    else {
        return userInput.number;
    }
}
function getSymbol(operation) {
    switch (operation) {
        case "Addition":
            return "+";
        case "Subtraction":
            return "-";
        case "Multiplication":
            return "*";
        case "Division":
            return "/";
        case "Modulus":
            return "%";
        case "Exponent":
            return "**";
        case "Square Root":
            return "√";
        default:
            return "";
    }
}
