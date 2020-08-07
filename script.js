// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var special = "!@#$%^&*()_+?[]{}-,.<>/"
  var numeric = "123456789"

  var length = parseInt(prompt("How long would you like your password to be 8-128 characters?"));

  var useLowercase = confirm("Would you like lowercase characters");
  var useUppercase = confirm("Would you like uppercase characters");
  var useSpecial = confirm("Would you like special characters");
  var useNumeric = confirm("Would you like numeric characters");
  
  var password = "";
  
  if (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  for (var i = 0; i < length; i++) {
    if (useLowercase) {
      password += getRandomValue(lowercase);
    }
    if (useUppercase) {
      password += getRandomValue(uppercase);
    }
    if (useSpecial) {
      password += getRandomValue(special);
    }
    if (useNumeric) {
      password += getRandomValue(numeric);
    }
  }
  return password.substring(0, length);

}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

generateBtn.addEventListener("click", writePassword);