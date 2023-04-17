/*
Description:

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

// eslint-disable-next-line no-unused-vars
function differenceInAges(ages) {
  const { min, max } = Math;

  return [min(...ages), max(...ages), max(...ages) - min(...ages)];
}

/*
function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}

function differenceInAges(ages) {
  const youngest = ages.sort((a, b) => a - b)[0];
  const oldest = ages.sort((a, b) => b - a)[0];

  return [youngest, oldest, oldest - youngest];
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  });
});
*/
