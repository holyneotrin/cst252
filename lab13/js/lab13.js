// author: trinity phan-low
// date: 10/13/2021
// public domain

// return Strength, Dexterity, Consitution, Intelligence, Wisdom, or Charisma
// depending on length mod of 6
function abilityScore(str) {
  len = str.length;
  mod = len % 6;
  if (mod == 0) {
    return "Strength"
  }
  else if (mod == 1) {
    return "Dexterity"
  }
  else if (mod == 2) {
    return "Consitution"
  }
  else if (mod == 3) {
    return "Intelligence"
  }
  else if (mod == 4){
    return "Wisdom"
  }
  else if (mod == 5) {
    return "Charisma"
  }
}

// click event created
var myButton = document.getElementById("button");
myButton.addEventListener("click",function(){
  var name = document.getElementById("input").value;
  var ability = abilityScore(name);
  //dispays image on button click
  var imageElement = document.getElementById("image");
  imageElement.style.display = imageElement.style.display = "block";
  //displays output
  newText = "<h3>The Game Master has declared your modifier to be: " + ability + ".</h3>";
  document.getElementById("output").innerHTML = newText;
  document.getElementById("name").innerHTML = ability;
})
