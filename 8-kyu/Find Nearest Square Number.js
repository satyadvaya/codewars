/*
DESCRIPTION:
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

Check my other katas:

Alphabetically ordered
Case-sensitive!
Not prime numbers
*/

// eslint-disable-next-line no-unused-vars
function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

/*
describe("Basic tests", () => {
  Test.assertEquals(nearestSq(1), 1);
  Test.assertEquals(nearestSq(2), 1);
  Test.assertEquals(nearestSq(10), 9);
  Test.assertEquals(nearestSq(111), 121);
  Test.assertEquals(nearestSq(9999), 10000);
});
*/
