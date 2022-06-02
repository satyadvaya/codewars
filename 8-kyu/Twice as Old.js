// Your function takes two arguments:

// 1. current father's age (years)
// 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// describe("Sample tests", function () {
//   it("Testing for dad's age: 36 and son's age: 7", function () {
//     Test.assertEquals(twiceAsOld(36, 7), 22);
//   });
//   it("Testing for dad's age: 55 and son's age: 30", function () {
//     Test.assertEquals(twiceAsOld(55, 30), 5);
//   });
//   it("Testing for dad's age: 42 and son's age: 21", function () {
//     Test.assertEquals(twiceAsOld(42, 21), 0);
//   });
//   it("Testing for dad's age: 22 and son's age: 1", function () {
//     Test.assertEquals(twiceAsOld(22, 1), 20);
//   });
//   it("Testing for dad's age: 29 and son's age: 0", function () {
//     Test.assertEquals(twiceAsOld(29, 0), 29);
//   });
// });
