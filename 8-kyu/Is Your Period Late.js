/*
Description:

In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

// eslint-disable-next-line no-unused-vars
function periodIsLate(last, today, cycleLength) {
  const msecPerDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds = 86400000

  return (today - last) / msecPerDay > cycleLength;
}

/*
function periodIsLate(last, today, cycleLength) {
  const msecPerDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds = 86400000

  return (
    Math.floor(today.getTime() - last.getTime()) / msecPerDay > cycleLength
  );
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35),
      false
    );
    Test.assertEquals(
      periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28),
      true
    );
  });
});
*/
