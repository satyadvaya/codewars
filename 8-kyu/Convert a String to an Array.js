// Description:

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// eslint-disable-next-line no-unused-vars
function stringToArray(string) {
  return string.split(" ");
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
//     assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
//   });
// });
