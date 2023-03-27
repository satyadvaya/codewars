/*
Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

// eslint-disable-next-line no-unused-vars
function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

/*
function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase())
    .join(".");
}

function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word.substring(0, 1).toUpperCase())
    .join(".");
}

chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});
*/
