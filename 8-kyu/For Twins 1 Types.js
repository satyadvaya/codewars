/*
DESCRIPTION:
Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
typeValidation(42, "number");   // => true
typeValidation("42", "number"); // => false
*/

// eslint-disable-next-line no-unused-vars
function typeValidation(variable, type) {
  return typeof variable == type;
}

/*
describe("Basic Tests", function () {
  Test.assertEquals(typeValidation(42, "number"), true);
  Test.assertEquals(typeValidation("42", "number"), false);
});
*/
