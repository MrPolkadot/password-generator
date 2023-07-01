// Assignment code here
let passwordLength = '';
//Create an object of characters by groups
const characters = {
lowercase: "abcdefghijklmnopqrstuvwxyz",
uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
symbols: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
}


//Gets a random lowercase letter
function randomLowerCase() {
  return characters.lowercase[Math.floor(Math.random() * characters.lowercase.length)];
}
console.log(randomLowerCase());

//Gets a random uppercase letter
function randomUpperCase() {
  return characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
}
console.log(randomUpperCase())

//Gets a random number
function randomNumber() {
  return characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
}
console.log(randomNumber());

//Gets a random symbol
function randomSymbol() {
  return characters.symbols[Math.floor(Math.random() * characters.symbols.length)];
}
console.log(randomSymbol())

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Create function to generate password
function generatePassword(/*length, lower, upper, numeric, special*/) {
  let length = prompt("Character length( At least 8 characters and no more than 128 characters");
  let lower = prompt("Include lowercase? (y/n)");
  let upper = prompt("Include uppercase? (y/n)");
  let numeric = prompt("Include numbers? (y/n)");
  let special = prompt("Include special characters? (y/n)");
  //for (let i = passwordLength; i.length < length; i++) {
    // let addChar = characters[Math.floor(Math.random() * characters.length)];
    if ((length >= 8) && (length <= 128)) {
      if (lower === "y") {
       passwordLength += randomLowerCase();
      }
      if (upper === "y") {
        passwordLength += randomUpperCase();
      }
      if (numeric === "y") {
        passwordLength += randomNumber();
      }
      if (special === "y") {
        passwordLength += randomSymbol();
      }
    }
    return passwordLength; 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//GIVEN I need a new, secure password
/*
WHEN I click the button to generate a password <------DONE
THEN I am presented with a series of prompts for password criteria <-----DONE
WHEN prompted for password criteria <------DONE
THEN I select which criteria to include in the password <-----DONE
WHEN prompted for the length of the password <------DONE
THEN I choose a length of at least 8 characters and no more than 128 characters <----DONE
WHEN asked for character types to include in the password <-----DONE
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters <------DONE
WHEN I answer each prompt <-----DONE?
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/