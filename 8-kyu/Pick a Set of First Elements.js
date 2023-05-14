/*
Description:

Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

// eslint-disable-next-line no-unused-vars
function first(arr, n) {
  return n === 0 ? [] : arr.slice(0, n > 0 ? n : 1);
}

/*
describe("Tests", () => {
  it("test", () => {
    var arr = ["a", "b", "c", "d", "e"];
    Test.assertSimilar(first(arr), ["a"]);
    Test.assertSimilar(first(arr, 2), ["a", "b"]);
  });
});
*/
