// Description:
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// eslint-disable-next-line no-unused-vars
function sumArray(array) {
  return array && array.length
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((prev, curr) => prev + curr, 0)
    : 0;
}

// const {assert} = require("chai");

// it("example tests", ()=>{
//   assert.strictEqual( sumArray(null)                     , 0 );
//   assert.strictEqual( sumArray([ ])                      , 0 );
//   assert.strictEqual( sumArray([ 3 ])                    , 0 );
//   assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
//   assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
//   assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
//   assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
//   assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
// });
