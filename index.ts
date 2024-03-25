import inquirer from "inquirer";


const randomNumber = 13;
const answers = await inquirer.prompt([
    {
       name: "userGuessedNumber",
       type: "number",
       message: "please guess a number between 1-10 ", 
    }
]);
if (answers.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number.")
}else{
    console.log("you guessed wrong number.")
}