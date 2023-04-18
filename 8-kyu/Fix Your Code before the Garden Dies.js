/*
Description:

You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
*/

// eslint-disable-next-line no-unused-vars
function rainAmount(mm) {
  return mm < 40
    ? `You need to give your plant ${40 - mm}mm of water`
    : "Your plant has had more than enough water for today!";
}

/*
function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  }

  return "Your plant has had more than enough water for today!";
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      rainAmount(100),
      "Your plant has had more than enough water for today!"
    );
    Test.assertEquals(
      rainAmount(39),
      "You need to give your plant 1mm of water"
    );
  });
});
*/
