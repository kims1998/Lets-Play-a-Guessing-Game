var lowers = "qwertyuiopasdfghjklzxcvbnm";
var Uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var specialsymbols = //add special symbols
var numbers = "0123456789"


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var generatepassword = function () {
  
}

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