// Description:
// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
// Objective

// Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

// eslint-disable-next-line no-unused-vars
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

// describe("class Labrador", () => {
//   it("should instantiate objects as expected", () => {
//     var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
//     Test.assertEquals(spitsy.name, "Spitsy");
//     Test.assertEquals(spitsy.age, 10);
//     Test.assertEquals(spitsy.gender, "Male");
//     Test.assertEquals(spitsy.species, "Labrador");
//     Test.assertEquals(spitsy.legs, 4);
//     Test.assertEquals(spitsy.size, "Large");
//     Test.assertEquals(spitsy.master, "Donald");
//     Test.assertEquals(spitsy.loyal, true);
//     var edward = new Labrador("Edward", 3, "Male", "Emma");
//     Test.assertEquals(edward.name, "Edward");
//     Test.assertEquals(edward.age, 3);
//     Test.assertEquals(edward.gender, "Male");
//     Test.assertEquals(edward.species, "Labrador");
//     Test.assertEquals(edward.legs, 4);
//     Test.assertEquals(edward.size, "Large");
//     Test.assertEquals(edward.master, "Emma");
//     Test.assertEquals(edward.loyal, true);
//   });
// });
