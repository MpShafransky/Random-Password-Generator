// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// User input variables: 
var enter;
var numbers;
var specialCharacter;
var upperCase;
var lowerCase;
// Start Password variable values: 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("Choose between 8 and 128 characters"));
    // First if statement for user validation 
    if (!enter) {
        alert("You must chose a valid length!");
    } else if (enter < 8 || enter > 128) {
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        numbers = confirm("Will this contain numbers?");
        specialCharacter = confirm("Will this contain special characters?");
        upperCase = confirm("Will this contain Uppercase letters?");
        lowerCase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!specialCharacter && !numbers && !upperCase && !lowerCase) {
        choices = alert("You must choose an option!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (specialCharacter && numbers && upperCase && lowerCase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (specialCharacter && numbers && upperCase) {
        choices = character.concat(number, alpha2);
    }
    else if (specialCharacter && numbers && lowerCase) {
        choices = character.concat(number, alpha);
    }
    else if (specialCharacter && lowerCase && upperCase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (numbers && lowerCase && upperCase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (specialCharacter && numbers) {
        choices = character.concat(number);

    } else if (specialCharacter && lowerCase) {
        choices = character.concat(alpha);

    } else if (specialCharacter && upperCase) {
        choices = character.concat(alpha2);
    }
    else if (lowerCase && numbers) {
        choices = alpha.concat(number);

    } else if (lowerCase && upperCase) {
        choices = alpha.concat(alpha2);

    } else if (numbers && upperCase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (specialCharacter) {
        choices = character;
    }
    else if (numbers) {
        choices = number;
    }
    else if (lowerCase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (upperCase) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var password = password.join("");
    UserInput(password);
    return password;
}
// This puts the password value into the textbox
function UserInput(password) {
    document.getElementById("password").textContent = password;

}
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password 
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
};




