// Description:

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// eslint-disable-next-line no-unused-vars
function getAverage(marks) {
  return Math.floor(eval(marks.join("+")) / marks.length);
}

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
// }

// const Test = require("@codewars/test-compat");

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(getAverage([2, 2, 2, 2]), 2);
//     Test.assertEquals(getAverage([1, 2, 3, 4, 5]), 3);
//     Test.assertEquals(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
//   });
// });
