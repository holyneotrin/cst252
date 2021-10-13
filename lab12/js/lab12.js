// author: Trinity Phan-Low
// date created October 11, 2021
// Public Domain

//adds green text to content
$("#challenge-button").click(function(){
  $("#content").removeClass("challenge2");
  $("#content").toggleClass("challenge1");
});

//adds orange text to content
$("#problem-button").click(function(){
  $("#content").removeClass("problem2");
  $("#content").toggleClass("problem1");
});

//adds purple text to content
$("#result-button").click(function() {
  $("#content").removeClass("result2");
  $("#content").toggleClass("result1");

});
