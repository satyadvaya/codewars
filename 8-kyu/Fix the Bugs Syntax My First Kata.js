// Description:
// Fix the Bugs (Syntax) - My First Kata
// Overview

// Hello, this is my first Kata so forgive me if it is of poor quality.

// In this Kata you should fix/create a program that returns the following values:

//     false/False if either a or b (or both) are not numbers
//     a % b plus b % a if both arguments are numbers

// You may assume the following:

//     If a and b are both numbers, neither of a or b will be 0.

// Language-Specific Instructions
// Javascript and PHP

// In this Kata you should try to fix all the syntax errors found in the code.

// Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

// Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.

// eslint-disable-next-line no-unused-vars
function myFirstKata(a, b) {
  return (a % b) + (b % a) || false;
}

// function myFirstKata(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return false;
//   } else {
//     return (a % b) + (b % a);
//   }
// }

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// console.log("My Test Cases");
// Test.assertEquals(myFirstKata(3,5),(3 % 5 + 5 % 3));
// Test.assertEquals(myFirstKata("hello",3),false);
// Test.assertEquals(myFirstKata(67,"bye"),false);
// Test.assertEquals(myFirstKata(true,true),false);
// Test.assertEquals(myFirstKata(314,107),(107 % 314 + 314 % 107));
// Test.assertEquals(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));
//   });
// });
