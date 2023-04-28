/*
Description:

Complete the function which converts hex number (given as a string) to a decimal number.
*/

// eslint-disable-next-line no-unused-vars
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(hexToDec("1"), 1);
    assert.strictEqual(hexToDec("a"), 10);
    assert.strictEqual(hexToDec("10"), 16);
    assert.strictEqual(hexToDec("FF"), 255);
    assert.strictEqual(hexToDec("-C"), -12);
  });
});
*/
