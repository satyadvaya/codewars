/*
Description:

Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98
*/

// eslint-disable-next-line no-unused-vars
const countSquares = function (cuts) {
  /*
  Following one or more cuts to a solid cube through each of its three dimensions ...
    Math.pow((cuts + 1), 3)       = total number of smaller cubes
    Math.pow((cuts - 1), 3)       = number of smaller cubes without at least one red face
    ((6 * Math.pow(cuts, 2)) + 2) = remaining number of smaller cubes with at least one red face
  */

  return cuts === 0 ? 1 : 6 * Math.pow(cuts, 2) + 2;
};

/*
describe("Basic tests", () => {
  Test.assertSimilar(countSquares(5), 152);
  Test.assertSimilar(countSquares(16), 1538);
  Test.assertSimilar(countSquares(23), 3176);
});
*/
