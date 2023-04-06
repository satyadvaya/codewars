/*
Description:
Circular Objects #1 - Running around in circles
Overview

A circular object is any object containing a property that refers to itself. An example of a circular object can be found right here at Codewars - the very programming environment that they provide you with. Just try it - print the details of the current programming environment to the console (I will not be giving you any hints - you'll have to figure this out yourself) and scroll through the printed text until you find a property named global. As you would expect, the printed output would say that it is [circular]. Now let's try printing the global property of the programming envoronment to the console. What do you see? If you followed the instructions properly you would see the exact same thing being printed out! Impressed? You can test this further by then printing the global property of the global property of the current environment to the console and you would still see the exact same thing being printed. In fact, no matter how many levels you go "inside" the object, you would still see the exact same thing being printed out.

Which leads us to the task described below ...
Task

Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self

... and so on.

NOTE: The code above is pseudocode. If you actually tested your circular object like this with equality or identity operators, it would not work as object literals do not have an intrinsic value.
Articles of Interest

Unfortunately, in this Kata, any article I recommend to you would immediately give away the solution so I have decided to not recommend any articles in this Kata of the series. I apologise for any inconvenience caused.
*/

let circular = { value: "Hello World" };
circular.self = circular;

/*
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("should test for something", function () {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
*/
