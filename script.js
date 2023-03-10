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

// initialising gloval arrays for password and charsArray as the code will utilise them accross mulitple functions
//Char array will be a array of each type of char type the user has chosen
var charsArray;
// passwordValue have the final passwordVales added to it.
var passwordValue;

// passwordValue have the final passwordVales added to it - to deduct from the value given to us by the user. This is part of ensuring that one of each 
var passwordValueDeductions = 0

// Function to prompt user for password options
function getPasswordOptions() {
  // setting charsArray to empty. This is important if we want to generate more than one password effectively
  charsArray = [];
  // setting charsArray to empty. This is important if we want to generate more than one password effectively
  passwordValue = "";

  // below ifs will prompt the user to choose each char type
  // if the user choosed a char type it will add that to charArray
  // it will also add 1 char of that type to the password (via the variable passwordValue)
  if (confirm("Would you like to include lower case characters?")) {
    charsArray = charsArray.concat(lowerCasedCharacters);
    passwordValue = passwordValue + getRandom(lowerCasedCharacters);
  };
  if (confirm("Would you like to include upper case characters?")) {
    charsArray = charsArray.concat(upperCasedCharacters);
    passwordValue = passwordValue + getRandom(upperCasedCharacters);
  };
  if (confirm("Would you like to include numneric characters?")) {
    charsArray = charsArray.concat(numericCharacters);
    passwordValue = passwordValue + getRandom(numericCharacters);
  };
  if (confirm("Would you like to include special characters?")) {
    charsArray = charsArray.concat(specialCharacters);
    passwordValue = passwordValue + getRandom(specialCharacters);
  };

  // This function will return the amount of digits the user would like. 
  // the returned value will be utilised later when generating the full password
  return(prompt("And finally, how many long would you like your password to be?"));

}

// Function for getting a random element from an array
// it takes an array as a parameter
function getRandom(arr) {
  //this will return one random element from the array 
  return(arr[Math.floor(Math.random() * arr.length)]);
}

// Function to generate password with user input
function generatePassword() {

  // getPasswordOptions is ran, and it's return value is stored in digitsAmount to be used later in the for loop
  var digitsAmount = getPasswordOptions()

  // validation check to ensure user has selected a char type
  if (charsArray.length == 0) {
    alert("Whoops! You need to choose at least one character type");
    return("Whoops! You need to choose at least one character type");
  };
  // validation check to ensure user has chosen a valid length for array and returns the error if they have't
  if (digitsAmount < 10 || digitsAmount > 64) {
    alert("Whoops! Your password length must have at least 10 chars and no more than 64");
    return("Whoops! Your password length must have at least 10 chars and no more than 64");
  };

  //deduct the number of digits already added to the password
  digitsAmount = digitsAmount - passwordValue.length

  // using digitsAmount as a limit the for loop will add a random char to the array using getRandom()
  for (var i = 0; i < digitsAmount; i++) {passwordValue = passwordValue + getRandom(charsArray)}

  // below code turns the string into an array in order to use sort and math.random to randomise the order of the chars in the string
  // it then turns it from an array back into a string
  var randomPass = passwordValue.split('').sort(function(){return 0.5-Math.random()}).join('');

  // returns the password
  return(passwordValue)

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
