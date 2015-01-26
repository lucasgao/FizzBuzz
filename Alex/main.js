

var fizz_buzz = function() {
  for (var i = 1; i <= 100; i++) {
    var v;
    if (i % 15 === 0) {
      v = "FizzBuzz";
    } else if (i % 5 === 0) {
      v = "Buzz";
    } else if (i % 3 === 0) {
      v = "Fizz";
    } else {
      v = i;
    }
      console.log(v);
  }
}

fizz_buzz();
