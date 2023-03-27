// Description:

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// eslint-disable-next-line no-unused-vars
function well(x) {
  const count = x.filter((x) => x == "good").length;
  return count < 1 ? "Fail!" : count < 3 ? "Publish!" : "I smell a series!";
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//   });
// });
