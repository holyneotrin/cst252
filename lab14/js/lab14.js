 // author: trinity phan-low
// date: 10.18.2021
// public domain

// click function from Matthew Lencioni
$("#loops").click(function(){
	$("#output").empty();
		for (num=1; num <=200; num++) {
			var outputStr = "";
		// multiples of 15
			if (num % 15 == 0){
    		console.log("FizzBuzz!")
    	};
    // multiples of 3
    	if (num % 3 == 0) {
        outputStr += "Fizz!"
    	};
    // multiples of 5
    	if (num % 5 == 0) {
      	outputStr += "Buzz!"
    	};
    	if (num % 7 == 0){
      	outputStr += "Boom!"
			};
	if (outputStr == ""){
		$("#output").append(num + "<br>");
	}
	else {
		$("#output").append(outputStr + '!' + "<br>");
	}
}
});
