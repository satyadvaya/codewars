// DESCRIPTION:
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers

// eslint-disable-next-line no-unused-vars
var cubeChecker = function (volume, side) {
  return Math.cbrt(volume) == side && Number.isInteger(side) && side > 0;
};

// var cubeChecker = function(volume, side) {
//   return (((Math.pow(side, 3)) == volume) && (Number.isInteger(side)) && (side > 0));
// };

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(cubeChecker(56.3, 1), false);
// Test.assertEquals(cubeChecker(-1, 2), false);
// Test.assertEquals(cubeChecker(8, 3), false);
// Test.assertEquals(cubeChecker(8, 2), true);
// Test.assertEquals(cubeChecker(-8,-2), false);
// Test.assertEquals(cubeChecker(0, 0), false);
// Test.assertEquals(cubeChecker(1, 5),  false);
// Test.assertEquals(cubeChecker(125, 5), true);
// Test.assertEquals(cubeChecker(125,-5), false);
//   });
// });
