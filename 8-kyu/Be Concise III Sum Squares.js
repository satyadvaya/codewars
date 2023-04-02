/*
Description:
Be Concise III - Sum Squares

You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843

Shorten the code such that it meets the requirements.

A few hints:

    Try researching about built-in Array methods; they may help shorten your code a lot

Good luck!
*/

// eslint-disable-next-line no-unused-vars
function sumSquares(array) {
  return array.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}

/*
describe("Your refactored solution", () => {
  it("should behave in exactly the same way as the program prior to refactoring for the range of inputs tested", () => {
    Test.assertEquals(sumSquares([1, 2, 3, 4, 5]), 55);
    Test.assertEquals(sumSquares([7, 3, 9, 6, 5]), 200);
    Test.assertEquals(sumSquares([11, 13, 15, 18, 2]), 843);
    Test.assertEquals(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 110);
  });
});
*/
