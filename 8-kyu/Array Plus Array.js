// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((prev, curr) => prev + curr);
}

// function arrayPlusArray(arr1, arr2) {
//   let arr1Sum = 0;
//   let arr2Sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     arr1Sum += arr1[i];
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     arr2Sum += arr2[j];
//   }

//   return (arr1Sum + arr2Sum);
// }

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  });
});
