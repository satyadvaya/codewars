// Description:

// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:
// c2 = a2 + b2

// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
// Return Values

//     1 if a, b and c form a pythagorean triple
//     0 if a, b and c do not form a pythagorean triple
//     For Python: return True or False
//     For JavaScript: return true or false

// eslint-disable-next-line no-unused-vars
function isPythagoreanTriple(integers) {
  const [a, b, c] = integers.sort((a, b) => a - b);
  return c ** 2 === a ** 2 + b ** 2;
}

// function isPythagoreanTriple(integers) {
//   const desc = integers.sort((a, b) => b - a);
//   return Math.pow(desc[0], 2) === (Math.pow(desc[1], 2) + Math.pow(desc[2], 2));
// }

// const chai = require("chai");
// const assert = chai.assert;

// describe("Simple test cases", function() {
//   it("Pass these", function() {
//     assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
//     assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
//   });
// });
