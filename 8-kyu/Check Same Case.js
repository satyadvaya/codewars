/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/

// eslint-disable-next-line no-unused-vars
function sameCase(a, b) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (
    (lower.includes(a) && lower.includes(b)) ||
    (upper.includes(a) && upper.includes(b))
  )
    return 1;
  if (
    (lower.includes(a) && upper.includes(b)) ||
    (upper.includes(a) && lower.includes(b))
  )
    return 0;
  return -1;
}

/*
function doTest(a, b, expected) {
  it(`Testing for "${a}" and "${b}"`, function () {
    assert.strictEqual(sameCase(a, b), expected, `For sameCase("${a}","${b}")`);
  });
}

describe("Solution", function () {
  doTest("C", "B", 1);
  doTest("b", "a", 1);
  doTest("d", "d", 1);
  doTest("A", "s", 0);
  doTest("c", "B", 0);
  doTest("b", "Z", 0);
  doTest("\t", "Z", -1);
  doTest("H", ":", -1);
});
*/
