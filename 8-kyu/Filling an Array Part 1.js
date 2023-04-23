/*
Description:

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.
*/

// eslint-disable-next-line no-unused-vars
const arr = (N) => {
  let array = [];

  for (let i = 0; i < N; i++) {
    array[i] = i;
  }

  return array;
};

/*
const arr = (N) => {
  let array = [];

  for (let i = 0; i < N; i++) {
    array.push(i);
  }

  return array;
};

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("#arr creates a new array with the numbers 0 to N-1", () => {
  it("should return an array", () => assert.isArray(arr()));
  it("should return a blank array when called with no argument", () =>
    assert.sameMembers(arr(), []));
  it("should return 0 to 3 when called with 4", () =>
    assert.sameMembers(arr(4), [0, 1, 2, 3]));
});
*/
