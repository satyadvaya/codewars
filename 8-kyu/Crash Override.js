/*
Description:

Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

Happy hacking!
*/

// eslint-disable-next-line no-unused-vars
function aliasGen(first, last) {
  return /^[a-z]/i.test(first) && /^[a-z]/i.test(last)
    ? // eslint-disable-next-line no-undef
      `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
    : "Your name must start with a letter from A - Z.";
}

/*
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(aliasGen("Mike", "Millington"), "Malware Mike");
    Test.assertEquals(aliasGen("Fahima", "Tash"), "Function T-Rex");
    Test.assertEquals(aliasGen("Daisy", "Petrovic"), "Data Payload");
    Test.assertEquals(
      aliasGen("7393424", "Anumbha"),
      "Your name must start with a letter from A - Z."
    );
    Test.assertEquals(
      aliasGen("Anuddanumbha", "23200"),
      "Your name must start with a letter from A - Z."
    );
  });
});
*/
