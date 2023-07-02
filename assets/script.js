// Assignment code here

//Create an object of characters by groups
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Gets a random lowercase letter
function randomLowerCase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

//Gets a random uppercase letter
function randomUpperCase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

//Gets a random number
function randomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

//Gets a random symbol
function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Create function to generate password
function generatePassword(charLength, lower, upper, numeric, special) {
  let passwordLength = '';
  charLength = prompt("Character length (Must be between 8 - 128 characters.");
  if (charLength < 8 || charLength > 128) {
    return alert("Must be between 8-128 characters.");
  }
  lower = prompt("Include lowercase? (Leave blank for yes or type 'n' for no.");
  upper = prompt("Include uppercase? Leave blank for yes or type 'n' for no.");
  numeric = prompt("Include numbers? (Leave blank for yes or type 'n' for no.");
  special = prompt("Include special characters? (Leave blank for yes or type 'n' for no.");
  if (charLength > 7 || charLength < 129) {
    for (let i = passwordLength.length; i < charLength; i++) {
      if (lower !== "n") {
        passwordLength += randomLowerCase();
      }
      if (upper !== "n") {
        passwordLength += randomUpperCase();
      }
      if (numeric !== "n") {
        passwordLength += randomNumber();
      }
      if (special !== "n") {
        passwordLength += randomSymbol();
      }
    }
    const finalPassword = passwordLength.slice(0, charLength);
    return finalPassword;
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);