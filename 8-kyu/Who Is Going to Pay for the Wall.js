// DESCRIPTION:
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

// eslint-disable-next-line no-unused-vars
function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

// function whoIsPaying(name) {
//   return (name.length > 2) ? [name, name.substring(0, 2)] : [name];
// }

// describe("Basic tests",() =>{
// Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
// Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
// Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
// Test.assertSimilar(whoIsPaying("Me"),["Me"]);
// Test.assertSimilar(whoIsPaying(""), [""]);
// Test.assertSimilar(whoIsPaying("I"), ["I"]);
// });
