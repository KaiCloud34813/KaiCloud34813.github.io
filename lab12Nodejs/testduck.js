const duck = require('./duck');

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
console.log(duck.duck1);

  console.log("Expected output of flying is true  " + myFunctionTest(true, duck.duck1.flying));
  console.log("Expected output of quaking is true  " + myFunctionTest(true, duck.duck1.quaking));
  console.log("Expected output of xPos is 0  " + myFunctionTest(0, duck.duck1.xPos));
  console.log("Expected output of yPos is 0  " + myFunctionTest(0, duck.duck1.yPos));