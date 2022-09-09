// Description:

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// eslint-disable-next-line no-unused-vars
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

// function switchItUp(number) {
//   return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number];
// }

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");
//   });
// });