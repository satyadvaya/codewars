// Description:
// Task

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
// Examples (input -> output)

// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

// eslint-disable-next-line no-unused-vars
function isOpposite(s1, s2) {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) return false;
  }

  return true;
}

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(isOpposite("ab","AB") , true);
// Test.assertSimilar(isOpposite("aB","Ab") , true);
// Test.assertSimilar(isOpposite("aBcd","AbCD") , true);
// Test.assertSimilar(isOpposite("aBcde","AbCD") , false);
// Test.assertSimilar(isOpposite("AB","Ab") , false);
// Test.assertSimilar(isOpposite("","") , false);

//   });
// });
