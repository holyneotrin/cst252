// date: 10/8/2021
// author: trinity phan-low
// public domain

var button = document.getElementById('my-button');

function sortText(text) {
	return text.split('').sort().reverse().join('');
}

// event handler that listens to button click
button.addEventListener('click', function() {
	// When the button is pushed, prompt the user to input their name with the prompt() function.
  //var name = prompt("What's your name?");
  // find the value of the input field
  var inputEl = document.getElementById('input');
  var name = inputEl.value;
  // run through sort
  var newName = sortText(name);

  // Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
  var newText = "Hello, " + newName + "!";
  // find the element!
	var heading = document.getElementById('greet');
  // modify the heading text
  heading.innerHTML = newText;
  // change output
  document.getElementById('output').innerHTML = newText;
});
