/*
Description:

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

// eslint-disable-next-line no-unused-vars
function bmi(weight, height) {
  const calc = weight / Math.pow(height, 2);
  return calc <= 18.5
    ? "Underweight"
    : calc <= 25.0
    ? "Normal"
    : calc <= 30.0
    ? "Overweight"
    : "Obese";
}

/*
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(bmi(80, 1.8), "Normal");
  });
});
*/
