/*
Description:

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

// eslint-disable-next-line no-unused-vars
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

/*
describe("Basic Tests", () => {
  Test.assertEquals(multiply(10), 250);
  Test.assertEquals(multiply(5), 25);
  Test.assertEquals(multiply(200), 25000);
  Test.assertEquals(multiply(0), 0);
  Test.assertEquals(multiply(-2), -10);
});
*/
