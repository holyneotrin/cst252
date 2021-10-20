// author: trinity phan-low
// date: 10.18.2021
// public domain

for (num=1; num <=200; num++) {
		if (num % 15 == 0){
    	console.log("FizzBuzz!")
    }
    //multiples of 3
    if (num % 3 == 0) {
        console.log("Fizz!");
    }
    // multiples of 5
    if (num % 5 == 0) {
      console.log("Buzz!");
    }
    if (num % 7 == 0){
      console.log("Boom!");
    }
    else {
        console.log(num);
    }
    
