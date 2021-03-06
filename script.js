// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//ask questions - store answers in #questions
// based on the answers - create possibilities functions
//randomly pick from possibilities as many times as possible

const UppersArr = charSet(65, 90); //These are the Uppercase Letters that'll be used in the password string
const LowersArr = charSet(97, 122); //These are the Lowercase Letters that'll be used in the password string
const NumbersArr = charSet(48, 57); //These are the Numbers that'll be used in the password string (0-9)
const SymbolsArr = charSet(33, 47).concat(
    charSet(58, 64)
  ).concat(
    charSet(91, 96)
  ).concat(
    charSet(123, 126)
);//These are the Special symbols being used for the password string, multiple concat due to the special characters being separated from each other.

//This function randomly generates a number
function randomIndexGenerator(arrayLength) {
  return Math.floor(Math.random() * arrayLength) //This portion expects a number to return
}


function charSet(start, end) {  //this function will search the character code numbers and push it into a new array. 
  let CharArray = [];
  for (let i = start; i <= end; i++){
    CharArray.push(String.fromCharCode(i))
  ;}
  return CharArray;
}

//When the user inputs are chosen, this function will create a new array.
function generatePassword() {
  let userInputLength = Number(prompt("Select a number from 08 - 128 character for your password length.")); //this portion ask the user choose from 8 to 128 characters.

  if (userInputLength >= 8 && userInputLength <= 128) { 
    let passwordString = "";

    let poolArray = CharPool();
    console.log(poolArray);

    console.log(randomIndexGenerator(poolArray.length));

    console.log(poolArray[randomIndexGenerator(poolArray.length)]);

    for (let indexPassword = 0; indexPassword < userInputLength; indexPassword++) {
      passwordString = passwordString + poolArray[randomIndexGenerator(poolArray.length)] //
    ;}
    console.log(passwordString); //in the event that they choose a number  < 8 and > 128, this'll prompt them to try again because it didn't meet the requirements.
      return passwordString
      ;} else {
    return "You chose a number that was not between 8 and 128 characters. Please try again."
      ;
  }
}

function CharPool() { 

  let CharArray = [];//this portion of codes will run when the user selects whether they want...
  if (confirm("Would you like to incorporate Uppercase Letters into your password?")) {
    CharArray = CharArray.concat(UppersArr) //...Uppercase lettering in the password.
      ;
  }

  if (confirm("Would you like to add LowerCase Letters as well?")) {
    CharArray = CharArray.concat(LowersArr) //...Lowercase lettering in the password.
      ;
  }

  if (confirm("Would you like to add Numbers to your password?")) {
    CharArray = CharArray.concat(NumbersArr) //...Numbers in the password.
      ;
  }

  if (confirm("Would you like to add Special Characters to your password?")) {
    CharArray = CharArray.concat(SymbolsArr) //...Special characters included in their password.
      ;
  }

  if (CharArray.length === 0) {
    alert("Please choose at least one of the following options.")
    return CharPool(); //This if statement is here in the event that the user chooses not to select yes to any of the options.
  }

  console.log(CharArray) //This will return the randomized characters.
  return CharArray;
}

