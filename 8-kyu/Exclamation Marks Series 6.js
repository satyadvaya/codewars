/*
Description:

Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

// eslint-disable-next-line no-unused-vars
function remove(s, n) {
  for (let i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  return s;
}

/*
function remove(s, n) {
  let sentence = s;
  while (n) {
    sentence = sentence.replace("!", "");
    n -= 1;
  }
  return sentence;
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    Test.assertSimilar(remove("Hi!", 1), "Hi");
    Test.assertSimilar(remove("Hi!", 100), "Hi");
    Test.assertSimilar(remove("Hi!!!", 1), "Hi!!");
    Test.assertSimilar(remove("Hi!!!", 100), "Hi");
    Test.assertSimilar(remove("!Hi", 1), "Hi");
    Test.assertSimilar(remove("!Hi!", 1), "Hi!");
    Test.assertSimilar(remove("!Hi!", 100), "Hi");
    Test.assertSimilar(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi");
    Test.assertSimilar(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi");
    Test.assertSimilar(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi");
    Test.assertSimilar(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi");
  });
});
*/
