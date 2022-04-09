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
    arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
);//These are the Special symbols being used for the password string, multiple concat due to the special characters
  //being separated from each other.

//This function randomly generates a number
function randomIndexGenerator(arrayLength) {
  return Math.floor(Math.random() * arrayLength) //This portion expects a number to return
}


function charSet(start, end) {
  let CharArray = [];
  for (let i = start; i <= end; i++){
    CharArray.push(String.fromCharCode(i))
  ;}
  return CharArray;
}


function generatePassword() {
  let userInputLength = Number(prompt("Select a number from 08 - 128 character for your password length."));

  if (userInputLength >= 8 && userInputLength <= 128) {
    let passwordString = "";

    let poolArray = charPool();
    console.log(poolArray);

    console.log(randomIndexGenerator(poolArray.length));

    console.log(poolArray[randomIndexGenerator(poolArray.length)]);

    for (let indexPassword = 0; indexPassword < userInputLength; indexPassword++) {
      passwordString = passwordString + poolArray[randomIndexGenerator(poolArray.length)]
    ;}
    console.log(passwordString);
      return passwordString
      ;} else {
    return "Please type a number between 8 and 128 characters for your password."
      ;
  }
}

function CharPool() {

  let CharArray = [];
  if (confirm("Would you like to incorporate Uppercase Letters into your password?")) {
    CharArray = CharArray.concat(UppersArr)
      ;
  }

  if (confirm("Would you like to incorporate LowerCase Letters as well?")) {
    CharArray = CharArray.concat(LowersArr)
      ;
  }

  if (confirm("Would you like to incorporate Numbers to your password?")) {
    CharArray = CharArray.concat(NumbersArr)
      ;
  }

  if (confirm("Would you like to incorporate Special Characters to your password?")) {
    CharArray = CharArray.concat(SymbolsArr)
      ;
  }

  console.log(CharArray);
  return CharArray;
}

