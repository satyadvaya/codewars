/*
Description:

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

// eslint-disable-next-line no-unused-vars
function isVow(a) {
  return a.map((num) =>
    "aeiou".includes(String.fromCharCode(num)) ? String.fromCharCode(num) : num
  );
}

/*
describe("Basic tests", () => {
  Test.assertSimilar(
    isVow([
      118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
      120, 106,
    ]),
    [
      118,
      "u",
      120,
      121,
      "u",
      98,
      122,
      "a",
      120,
      106,
      104,
      116,
      113,
      114,
      113,
      120,
      106,
    ]
  );
  Test.assertSimilar(
    isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]),
    ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]
  );
});
*/
