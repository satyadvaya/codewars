// Description:

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// eslint-disable-next-line no-unused-vars
function uefaEuro2016(teams, scores) {
  const blurb = `At match ${teams[0]} - ${teams[1]},`;

  return scores[0] > scores[1]
    ? `${blurb} ${teams[0]} won!`
    : scores[0] < scores[1]
    ? `${blurb} ${teams[1]} won!`
    : `${blurb} teams played draw.`;
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
//     assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
//     assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");
//   });
// });
