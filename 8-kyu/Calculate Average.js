// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// eslint-disable-next-line no-unused-vars
function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((prev, curr) => prev + curr, 0) / array.length;
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(findAverage([1,1,1]), 1);
//     assert.strictEqual(findAverage([1,2,3]), 2);
//     assert.strictEqual(findAverage([1,2,3,4]), 2.5);
//   });
// });
