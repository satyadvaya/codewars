// Description:

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// eslint-disable-next-line no-unused-vars
function squareArea(A) {
  /*
  circumference of a circle = 2πr
  A = (2πr / 4) or (πr / 2)
  r = (2A / π)
  
  area of the square = (r * r) or ((2A / π) * (2A / π))
  */

  return Number(Math.pow((2 * A) / Math.PI, 2).toFixed(2));
}

// describe("squareArea(2)", function() {
//   Test.assertEquals(squareArea(2), 1.62);
// });

// describe("squareArea(0)", function() {
//   Test.assertEquals(squareArea(0), 0);
// });

// describe("squareArea(14.05)", function() {
//   Test.assertEquals(squareArea(14.05), 80);
// });
