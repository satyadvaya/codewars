/*
Description:
Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

// eslint-disable-next-line no-unused-vars
function pipeFix(numbers) {
  let pipesList = [];

  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    pipesList.push(i);
  }

  return pipesList;
}

/*
function pipeFix(numbers) {
  let pipesList = [];

  for (let i = numbers[0]; i <= numbers.slice(-1)[0]; i++) {
    pipesList.push(i);
  }

  return pipesList;
}

function pipeFix(numbers) {
  let pipesList = [];

  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    pipesList.push(i);
  }

  return pipesList;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(
      pipeFix([1, 2, 3, 5, 6, 8, 9]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepEqual(
      pipeFix([1, 2, 3, 12]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    );
    assert.deepEqual(pipeFix([6, 9]), [6, 7, 8, 9]);
    assert.deepEqual(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
    assert.deepEqual(pipeFix([1, 2, 3]), [1, 2, 3]);
  });
});
*/
