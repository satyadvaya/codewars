// Description:

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// eslint-disable-next-line no-unused-vars
function getSize(width, height, depth) {
  return [
    2 * (width * height + width * depth + height * depth),
    width * height * depth,
  ];
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(getSize(4, 2, 6), [88, 48]);
//     assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
//     assert.deepEqual(getSize(4, 2, 6)[0], 88);
//     assert.deepEqual(getSize(4, 2, 6)[1], 48);
//   })
// });
