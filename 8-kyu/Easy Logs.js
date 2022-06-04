// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x, a, b) {
  return (Math.log(a) + Math.log(b)) / Math.log(x);
}

// function logs(x , a, b) {
//   return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));
// }

// describe("Example tests", function(){
//   it("Example Test Case should pass basic tests", function(){
//     Test.assertApproxEquals(logs(10, 2, 3), 0.7781512503836435);
//     Test.assertApproxEquals(logs(5, 2, 3), 1.1132827525593785);
//     Test.assertApproxEquals(logs(1000, 2, 3), 0.25938375012788123);
//   });
// });
