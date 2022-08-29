// Description:

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

// Good luck!

// eslint-disable-next-line no-unused-vars
function calculator(a, b, sign) {
  return !isNaN(a) && !isNaN(b) && "+-*/".includes(sign)
    ? eval(a + sign + b)
    : "unknown value";
}

// function calculator(a, b, sign) {
//   try {
//     return eval(`${a} ${sign} ${b}`);
//   } catch(error) {
//     return 'unknown value';
//   }
// }

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
// Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
// Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
// Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
// Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate");
// Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");
//   });
// });
