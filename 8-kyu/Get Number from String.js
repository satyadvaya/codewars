/*
Description:

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

// eslint-disable-next-line no-unused-vars
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ""));
}

/*
describe("Basic tests", function () {
  it("should work as expected", function () {
    Test.assertSimilar(getNumberFromString("1"), 1);
    Test.assertSimilar(getNumberFromString("123"), 123);
    Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
  });
});
*/
