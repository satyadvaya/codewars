// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => Math.ceil(month / 3);

// const quarterOf = (month) => {
//   return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
// };

// const quarterOf = (month) => {
//   if (month < 4) {
//     return 1;
//   } else if (month < 7) {
//     return 2;
//   } else if (month < 10) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1);
    assert.strictEqual(quarterOf(8), 3);
    assert.strictEqual(quarterOf(11), 4);
  });
});
