/*
* Author: Trinity Phan-Low
* Created 9.21.2021
* License: Public Domain
*/

// Define Variables
myTransport = [ "MST Transit", "Roommate's Car", "Uber"];

var myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995,
  age: function(){
    return 2021 - age;
  }
}

// output
document.writeln("Kinds of transportaion I use: ", myTransport,"<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
