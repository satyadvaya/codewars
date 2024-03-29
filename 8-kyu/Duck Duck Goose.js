/*
Description:

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
*/

// eslint-disable-next-line no-unused-vars
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

// eslint-disable-next-line no-unused-vars
class Player {
  constructor(name) {
    this.name = name;
  }
}

/*
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

describe("fixed tests", function () {
  it("should find the correct goose", function () {
    Test.assertEquals(duckDuckGoose(players, 1), "a");
    Test.assertEquals(duckDuckGoose(players, 3), "c");
    Test.assertEquals(duckDuckGoose(players, 10), "z");
    Test.assertEquals(duckDuckGoose(players, 20), "z");
    Test.assertEquals(duckDuckGoose(players, 30), "z");
    Test.assertEquals(duckDuckGoose(players, 18), "g");
    Test.assertEquals(duckDuckGoose(players, 28), "g");
    Test.assertEquals(duckDuckGoose(players, 12), "b");
    Test.assertEquals(duckDuckGoose(players, 2), "b");
    Test.assertEquals(duckDuckGoose(players, 7), "f");
  });
});
*/
