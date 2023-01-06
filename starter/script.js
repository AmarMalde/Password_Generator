// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var charsArray;


// Function to prompt user for password options
function getPasswordOptions() {
  charsArray = [];

  if (confirm("Would you like to include lower case characters?")) { charsArray = charsArray.concat(lowerCasedCharacters)};
  if (confirm("Would you like to include upper case characters?")) { charsArray = charsArray.concat(upperCasedCharacters)};
  if (confirm("Would you like to include numneric characters?")) { charsArray = charsArray.concat(numericCharacters)};
  if (confirm("Would you like to include special characters?")) { charsArray = charsArray.concat(specialCharacters)};
  return(prompt("And finally, how many digits would you like in your password?"));

}

// Function for getting a random element from an array
function getRandom(arr) {
  return(arr[Math.floor(Math.random() * arr.length)]);
}

// Function to generate password with user input
function generatePassword() {
  var passwordIter = ""
  var digitsAmount = getPasswordOptions()
  
  //where we will insert error checking e.g. newChars ==0, or amountOfDigits (the return value) is too low or high

  for (var i = 0; i < digitsAmount; i++) {
    passwordIter = passwordIter + getRandom(charsArray)
  }

  return(passwordIter)

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);