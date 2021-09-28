//Author: Trinity Phan-Low
//Created 9.27.2021
//Public Domain

var outputEl = document.getElementById("output");

// function to add text to given element
function main() {
    // get element by id
    outputElement = document.getElementById("js-output");
    // change contents of element
    outputElement.innerHTML = "Yo, 'sup?";
}


// adds three to number
function add3(x){
    return (x + 3);
}
//test function
console.log("What is the sum of 6+3", add3(6));

// number arrays
array = [3, 5, 1, 6, 10, 16]
console.log("My array", array);
var newEl = document.createElement("p");
newEl.innerHTML = "Original array:" + JSON.stringify(array);

// should adds 3 to number array
var result = array.map(add3);
console.log("Test of sum of array:", result);
var newEl = document.createElement("p");
newEl.innerHTML = "Sum of array:" + JSON.stringify(result);

//multiplies 6 from number arrays
var result = array.map(function(x){
    return x * 6;
})
console.log("Product of array:", result);
var newEl = document.createElement("p");
newEl.innerHTML = "Product of array:" + JSON.stringify(result);
