import inquirer from "inquirer";
/* -------------------------------------------------------------------------- */
/*                                   Task 2                                   */
/* -------------------------------------------------------------------------- */
// function sumNumbers(){
//     // - **Scenario 1: Sum numbers**
//     //     - Write a function named **`add`** that takes two numbers as arguments and returns their sum.
//     console.log("\n ---------------- Task 2: Sum numbers ------------------\n");
//     let num1: number, num2: number;
//     let num1Prompt = [
//         {
//             type: "input",
//             name: "number",
//             message: "Enter 1st number: ",
//         },
//     ];
//     let num2Prompt = [
//         {
//             type: "input",
//             name: "number",
//             message: "Enter 2nd number: ",
//         },
//     ];
//      // Add function
//      function add(a: number, b: number): number {
//         return a + b;
//     }
//     async function takePrompts(prompt: QuestionCollection<Answers>):Promise<number>{
//         const answers = await inquirer.prompt(prompt);
//         let num = parseFloat(answers.number);
//         // Check if number is valid, in case of invalid number, prompt again
//         if(isNaN(num)){
//             console.log("Please enter a valid number");
//            return takePrompts(prompt);
//         }
//         return num;
//     }
//     takePrompts(num1Prompt).then((result) => {
//         num1 = result;
//         takePrompts(num2Prompt).then((result) => {
//             num2 = result;
//             console.log(`Sum of ${num1} and ${num2} is ${add(num1, num2)}`);
//             console.log("\n ---------------- End ------------------\n");
//         })
//     });
// }
/* -------------------------------------------------------------------------- */
/*                    Task 2: Scenario 2, Check Even or Odd                   */
/* -------------------------------------------------------------------------- */
// - ** Scenario 2: Check Even or Odd **
//     - Develop a function ** `checkEvenOrOdd` ** that checks if a given number is even or odd.
//     - The function should take an integer as a parameter and return a string indicating whether the number is even or odd.
function checkEvenOrOdd() {
    console.log("\n ---------------- Task 2: Scenario 2, Check Even or Odd  ------------------\n");
    let num;
    const numberPrompt = [
        {
            type: "input",
            name: "number",
            message: "Enter the number: "
        },
        {
            type: "input",
            name: "number1",
            message: "Enter the 2nd number: "
        }
    ];
    takePrompt(numberPrompt);
    async function takePrompt(prompt) {
        const answers = await inquirer.prompt(prompt);
        let number = parseInt(answers.number);
        //Check if entered number is valid or no
        if (isNaN(number)) {
            console.log("You have entered an invalid Number please try again");
            takePrompt(prompt);
        }
        else {
            return number;
        }
    }
}
checkEvenOrOdd();
