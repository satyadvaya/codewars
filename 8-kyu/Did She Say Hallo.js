/*
Description:

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

    hello - english
    ciao - italian
    salut - french
    hallo - german
    hola - spanish
    ahoj - czech republic
    czesc - polish

Notes

    you can assume the input is a string.
    to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
    function should be case insensitive to pass the tests
*/

// eslint-disable-next-line no-unused-vars
function validateHello(greetings) {
  return /h([ae]llo|ola)|ciao|salut|ahoj|czesc/i.test(greetings);
}

/*
function validateHello(greetings) {
  let res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);
  return res;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(validateHello("ahoj"), true);

    Test.assertEquals(validateHello("meh"), false);
  });
});
*/
