/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

// eslint-disable-next-line no-unused-vars
function remove(string) {
  while (string[string.length - 1] == "!") {
    string = string.slice(0, -1);
  }
  return string;
}

/*
function remove(string) {
  let array = [];
  for (let i = string.length - 1; i > 0; i--) {
    if (string[i] != "!") {
      array.push(string.slice(0, i + 1));
      return array.toString();
    }
  }
}

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

it("It should works for basic tests", function () {
  doTest("Hi!", "Hi");
  doTest("Hi!!!", "Hi");
  doTest("!Hi", "!Hi");
  doTest("!Hi!", "!Hi");
  doTest("Hi! Hi!", "Hi! Hi");
  doTest("Hi", "Hi");
});
*/
