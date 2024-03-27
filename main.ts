#! /usr/bin/env node

//Importing Inquirer
import inquirer from "inquirer";


//Assignining And Declaring values to balance and pin

let balance : number = 10000;
let pin : number = 1234;

console.log(`"Welcome to ABC ATM"`);

//Taking input for pin 

const input = await inquirer.prompt([{
    message : "Enter the Pin :",
    name : "pin",
    type : "number"
}])

//if pin is correct ask options (withdraw or check balance)

if(input.pin == pin){
const options = await inquirer.prompt([{
    name : "option",
    type : "list",
    message : "Select the options below",
    choices : ["Withdraw","Check Balance"]
}])

//if option is withdraw it will give two more options(cutom amount or fast cash)
if(options.option == "Withdraw"){
    let amount = await inquirer.prompt([{
        message : "Please select one of the options below :",
        name : "draw",
        type : "list",
        choices : ["Amount","Fastcash"]
    }])
    if(amount.draw == "Amount"){
        let camount = await inquirer.prompt([{
            message : "Enter the Amount",
            name : "input",
            type : "number"
        }])

    if(camount.input <= 10000){
        console.log(`Your Remaining Balance is : ${balance - camount.input}`);
    }
    else{
        console.log("Insufficient Balance!");
    }}
    else if(amount.draw == "Fastcash"){
        let fopts = await inquirer.prompt([{
            message : "Select one of the Options :",
            name : "choice",
            type : "list",
            choices: ["Rs.500","Rs.1000","Rs.2000","Rs.5000"]
        }])
        if(fopts.choice == "Rs.500"){
            console.log(`Your Remaining Balance is : ${balance - 500}`);
            
        }
        else if(fopts.choice == "Rs.1000"){
            console.log(`Your Remaining Balance is : ${balance - 1000}`);
            
        }
        else if(fopts.choice == "Rs.2000"){
            console.log(`Your Remaining Balance is : ${balance - 2000}`);
            
        }
        else if(fopts.choice == "Rs.5000"){
            console.log(`Your Remaining Balance is : ${balance - 5000}`);
            
        }
        
    }
}

//if option is check balance it will print balance
else if(options.option == "Check Balance"){
    console.log(`Your Current Balance is "Rs.${balance}"`);
    
}}

//if the pin is wrong it will print wrong pin!
else{
    console.log("Wrong PIN!")
}

