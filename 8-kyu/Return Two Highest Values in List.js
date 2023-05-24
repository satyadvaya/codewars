/*
Description:

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

// eslint-disable-next-line no-unused-vars
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

/*
function twoHighest(arr) {
  return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);
}

const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.deepEqual(twoHighest([]), []);
    assert.deepEqual(twoHighest([15]), [15]);
    assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17]);
  });
});
*/
