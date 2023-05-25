/*
DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// eslint-disable-next-line no-unused-vars
const reverseSeq = (n) => {
  return [...Array(n)].map((element, index) => index + 1).reverse();
};

/*
const reverseSeq = (n) => {
  return [...Array(n)].fill(n).map((element, index) => n - index);
};

const reverseSeq = (n) => {
  let array = [];
  for (let i = n; i > 0; i--) {
    array.push(i);
  }
  return array;
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("reverseSeq", function () {
  it("Sample Test", function () {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});
*/
