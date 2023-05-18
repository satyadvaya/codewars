/*
Description:

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

// eslint-disable-next-line no-unused-vars
function correctPolishLetters(string) {
  const letterMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return [...string].map((char) => letterMap[char] || char).join("");
}

/*
function correctPolishLetters(string) {
  const letterMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return string
    .split("")
    .map((char) =>
      Object.keys(letterMap).includes(char) ? letterMap[char] : char
    )
    .join("");
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      correctPolishLetters("Jędrzej Błądziński"),
      "Jedrzej Bladzinski"
    );
    Test.assertEquals(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
    Test.assertEquals(
      correctPolishLetters("Maria Skłodowska-Curie"),
      "Maria Sklodowska-Curie"
    );
  });
});
*/
