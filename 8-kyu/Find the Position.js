/*
Description:

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// eslint-disable-next-line no-unused-vars
function position(letter) {
  return `Position of alphabet: ${"0abcdefghijklmnopqrstuvwxyz".indexOf(
    letter
  )}`;
}

/*
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(position("a"), "Position of alphabet: 1");
    Test.assertEquals(position("z"), "Position of alphabet: 26");
    Test.assertEquals(position("e"), "Position of alphabet: 5");
  });
});
*/
