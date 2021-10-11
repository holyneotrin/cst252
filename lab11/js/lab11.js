// author: trinity phan-low
// date 10.10.2021
// public domain

//jQuery button push
$("#output").html("<button id=my-button>Press Me");

// creates alert
$("button").click(function(){
    alert('You pushed my button!')
});

//makes button green
$("button").css("background-color", "#3CB371");
