/*
DESCRIPTION:
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

// eslint-disable-next-line no-unused-vars
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * l + 2 * w;
};

/*
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  }
  return 2 * l + 2 * w;
};

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(areaOrPerimeter(4, 4), 16);
    Test.assertEquals(areaOrPerimeter(6, 10), 32);
  });
});
*/
