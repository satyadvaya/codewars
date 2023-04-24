/*
DESCRIPTION:
You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.
*/

// eslint-disable-next-line no-unused-vars
function toFreud(string) {
  return !string ? "" : "sex ".repeat(string.split(" ").length).trim();
}

/*
function toFreud(string) {
  return !string ? "" : string.split(" ").fill("sex").join(" ");
}

function toFreud(string) {
  return !string
    ? ""
    : string
        .split(" ")
        .map((word) => "sex")
        .join(" ");
}

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(toFreud(""), "");
    Test.assertSimilar(toFreud("test"), "sex");
    Test.assertSimilar(toFreud("This is a test"), "sex sex sex sex");
    Test.assertSimilar(toFreud("This is a longer test"), "sex sex sex sex sex");
    Test.assertSimilar(
      toFreud("You're becoming a true freudian expert"),
      "sex sex sex sex sex sex"
    );
  });
});
*/
