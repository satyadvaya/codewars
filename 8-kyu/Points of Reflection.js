/*
DESCRIPTION:
"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

Task
Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

This kata was inspired by the Hackerrank challenge Find Point
*/

// eslint-disable-next-line no-unused-vars
function symmetricPoint(p, q) {
  return q.map((x, i) => 2 * x - p[i]);
}

/*
function symmetricPoint(p, q) {
  return p.map((x, i) => 2 * q[i] - x);
}

function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}

const assert = require("chai").assert;

describe("Points of Reflection", () => {
  it("Basic tests", () => {
    assert.deepEqual(symmetricPoint([0, 0], [1, 1]), [2, 2]);
    assert.deepEqual(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
    assert.deepEqual(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
    assert.deepEqual(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
    assert.deepEqual(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
    assert.deepEqual(symmetricPoint([0, 0], [0, 0]), [0, 0]);
  });
});
*/
