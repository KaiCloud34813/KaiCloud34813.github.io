/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }

/*  isVowel takes a character and returns true if it is a vowel, false otherwise */
function isVowel(ch) {
    if (ch.toLowerCase() == 'a' || ch.toLowerCase() == 'e' || ch.toLowerCase() == 'i' || ch.toLowerCase() == 'o' || ch.toLowerCase() == 'u') {
      return true;
    }
    return false;
}

/* sum sums all the numbers in an array of numbers */
function sum(a) {
    let b=0;
    for(let i=0; i<a.length; i++) {
      b+=a[i];
    }
    return b;
  }

/* multiply multiplies all the numbers in an array of numbers */
function multiply(a) {
    let b=1;
    for(let i=0; i<a.length; i++) {
      b*=a[i];
    }
    return b;
  }

/* reverse computes the reversal of a string */
function reverse(a){
    let b="";
    for (let i=a.length-1; i>=0; i--){
      b+=a.at(i);
    }
    return b;
  }
/*  findLongestWord takes an array of words and returns the length of the longest one */
function findLongestWord(a){
    let x=0;
    for (let i=0; i<a.length-1; i++) {
      if (a[i].length<= a[i+1].length) {
        x=a[i+1].length;
      }
    }
    return x;
  }

/* filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(a,i) {
    let b=[];
    for (let j=0; j<a.length; j++) {
      if (a[j].length>i) {
        b.push(a[j]);
  
      }
    }
    return b;
    
  }
const a = [1,3,5,3,3]; 
/* multiply each element by 10 */
const b = a.map((elem, i, array) => elem * 10)
console.log("Multiply each element by 10: "+b.toString());
//document.writeln(b.toString() + "<br/>");

/* return array with all elements equal to 3 */ 
const c = a.map((elem, i, array) => elem=3)
console.log("Return array with all elements equal to 3: "+c.toString());
//document.writeln(c.toString() + "<br/>");

/* return the product of all elements */
const d = a.reduce((prevValue, elem) => prevValue * elem)
console.log("Return the product of all elements: "+d);
//document.writeln(d.toString() + "<br/>");