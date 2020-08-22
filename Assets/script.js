// Assignment Code
var generateBtn = document.querySelector("#generate");

// User inputs

var getRandomUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var getRandomLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var getRandomNumber = [1,2,3,4,5,6,7,8,9];
var getRandomSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?","^", "_", "`", "{", "}"]
var passLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSymbol;
var userchoices;


function generatePassword() {
  passLength = parseInt(prompt("How many characters should your password be ? Must be between 8 and 128"));

  if (!passLength) {
    alert("You must select password length");
  } 
  
  else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("You must choose between 8 and 128 Characters"));
  }

  else {

  confirmUpperCase = confirm("Will this password contain uppercase?");
  confirmLowerCase = confirm("Will this password contain lowercase?");
  confirmNumber = confirm("Will this password contain numbers?");
  confirmSymbol = confirm("Will this password contain symbols?");
  }

  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSymbol) {
    userchoices = alert("You must choose at least one option!");
  }

  // 4 confirms

  else if (confirmUpperCase && confirmLowerCase && confirmNumber && confirmSymbol) {
    userchoices = getRandomUppercase.concat(getRandomLowercase,getRandomNumber,getRandomSymbol);
  }

  // 3 confirms

  else if (confirmUpperCase && confirmLowerCase && confirmNumber) {
    userchoices = getRandomUppercase.concat(getRandomLowercase,getRandomNumber);
  }

  else if (confirmUpperCase && confirmLowerCase && confirmSymbol) {
    userchoices = getRandomUppercase.concat(getRandomLowercase,getRandomSymbol);
  }

  else if (confirmUpperCase && confirmNumber && confirmSymbol) {
    userchoices = getRandomUppercase.concat(getRandomNumber,getRandomSymbol);
  }

  else if (confirmLowerCase && confirmSymbol && confirmNumber) {
    userchoices = getRandomLowercase.concat(getRandomSymbol,getRandomNumber);
  }

  // 2 confirms

  else if (confirmUpperCase && confirmLowerCase) {
    userchoices = getRandomUppercase.concat(getRandomLowercase);
  }

  else if (confirmUpperCase && confirmNumber) {
    userchoices = getRandomUppercase.concat(getRandomNumber);
  }

  else if (confirmUppercase && confirmSymbol) {
    userchoices = getRandomUppercase.concat(getRandomSymbol);
  }

  else if (confirmLowerCase && confirmNumber) {
    userchoices = getRandomLowercase.concat(getRandomNumber);
  }

  else if (confirmLowerCase && confirmSymbol) {
    userchoices = getRandomLowercase.concat(getRandomSymbol);
  }

  else if (confirmSymbol && confirmNumber) {
    userchoices = getRandomSymbol.concat(getRandomNumber);
  }

  // 1 confirm

  else if (confirmUpperCase) {
    userchoices = getRandomUppercase;
  }

  else if (confirmLowerCase) {
    userchoices = getRandomLowercase;
  }

  else if (confirmSymbol) {
    userchoices = getRandomSymbol;
  }

  else if (confirmNumber) {
    userchoices = getRandomNumber;
  }

  var password = [];

  for (var i = 0; i < passLength; i++) {
  var pick = userchoices[Math.floor(Math.random() * userchoices.length)];
  password.push(pick);
  }

  var final = password.join("");
  userInput(final);
  return final;

  console.log(pick);

}

function userInput(final) {
  document.getElementById("password").textContent = final;
}

generateBtn.addEventListener("click", function() {
  final = generatePassword();
  document.getElementById("password").placeholder = final;
});