// author: Trinity Phan-Low
// date: 9.29.21
// Public Domain

//first button
var targetEl = document.getElementById("output");
targetEl

//creates button
var oneEl = document.createElement("button");
oneEl
targetEl.appendChild(oneEl);
//renames button id
oneEl.id = "new-button";
//adds text to button
oneEl.innerText = "I'm not in the orignal HTML";
//changes backgroundColor, font color, and font size
oneEl.style.backgroundColor = "steelblue"
oneEl.style.color = "white";
oneEl.style.fontSize = "24px";

//second button
document.write("<br>");
var targetEl = document.getElementById("output");

//creates button
var twoEl = document.createElement("button");
targetEl.appendChild(twoEl);

//renames button id
twoEl.id = "button-two";
//adds text to button
twoEl.innerText = "I am also not in the original HTML";
//changes backgroundColor, font color, font size, and font family
twoEl.style.backgroundColor = "slategrey";
twoEl.style.color = "white";
twoEl.style.fontSize = "24px";
twoEl.style.fontFamily = "Courier New";
twoEl.style.margin = "5px";
