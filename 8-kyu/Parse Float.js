/*
Description:

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

// eslint-disable-next-line no-unused-vars
function parseF(s) {
  return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

/*
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(parseF("1"), 1.0);
  });
});
*/
