// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  arr.sort((a, b) => b - a);

  let diffs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    diffs.push(arr[i] - arr[i + 1]);
  }
  return diffs.reduce((prev, curr) => prev + curr, 0);
}

// function sumOfDifferences(arr) {
//   if (arr.length <= 1) {return 0};

//   arr.sort((a, b) => b - a);

//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i] - arr[i + 1];
//   }
//   return sum;
// }

// describe("sumOfDifferences([1, 2, 10]", function() {
//   Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
// });

// describe("sumOfDifferences([-3, -2, -1])", function() {
//   Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
// });
