// Description:

// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

// eslint-disable-next-line no-unused-vars
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(lowercaseCount("abc"), 3);
// Test.assertEquals(lowercaseCount("abcABC123"), 3);
// Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
// Test.assertEquals(lowercaseCount(""), 0)
// Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
// Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
//   });
// });
