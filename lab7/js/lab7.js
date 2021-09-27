//
// Author: Trinity Phan-Low
// Created: 9.23.2021
// Public Domain
//

// shuffleArray - take an array, returns shuffled array
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Given a string, return string in Title Case
// thank you https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// A function that takes user input and sorts the letters of their name
function sortUserName(userName) {
    return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters of their name
function randomizeName(userName) {
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    var newName = toTitleCase(shuffledString);
    return newName;
}

function getName() {
  var name = window.prompt("Hello! The wizard will give you a new name! Put your old name here.");
  // var name = document.getElementById("inputField").val
  return name;
}

function main() {
    var userName = getName();
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("The wizard is has conjured up your new name above!");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

main();
