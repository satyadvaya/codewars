/*
Description:

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

// eslint-disable-next-line no-unused-vars
function howMuchILoveYou(nbPetals) {
  return [
    `not at all`,
    `I love you`,
    `a little`,
    `a lot`,
    `passionately`,
    `madly`,
  ][nbPetals % 6];
}

/*
function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return phrases[(nbPetals - 1) % 6];
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("howMuchILoveYou", function () {
  it("Basic tests", function () {
    assert.strictEqual(howMuchILoveYou(7), "I love you");
    assert.strictEqual(howMuchILoveYou(3), "a lot");
    assert.strictEqual(howMuchILoveYou(6), "not at all");
  });
});
*/
