/*
Description:

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

This is a modification on the Kata: Array2Binary addition hope you like it
*/

// eslint-disable-next-line no-unused-vars
function arr2bin(arr) {
  return arr
    .reduce((prev, curr) => prev + (typeof curr === "number" ? curr : 0), 0)
    .toString(2);
}

/*
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(arr2bin([1, 2]), "11");
    Test.assertEquals(arr2bin([1, 2, 3, 4, 5]), "1111");
    Test.assertEquals(arr2bin([1, 10, 100, 1000]), "10001010111");
    Test.assertEquals(arr2bin([null]), "0");
    Test.assertEquals(arr2bin([true, true, false, 15]), "1111");
  });
});
*/
