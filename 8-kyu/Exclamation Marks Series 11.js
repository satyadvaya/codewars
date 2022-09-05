// Description:
// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// eslint-disable-next-line no-unused-vars
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

// function replace(s) {
//   return s.replace(/[aeiouAEIOU]/g, '!');
// }

// describe("Basic Tests", function(){
//   it("It should works for basic tests", function(){

// Test.assertSimilar(replace("Hi!") , "H!!")
// Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
// Test.assertSimilar(replace("aeiou") , "!!!!!")
// Test.assertSimilar(replace("ABCDE") , "!BCD!")

// })})
