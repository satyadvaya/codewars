// Description:

// This time we learn three methods to retrieve the string:indexOf() lastIndexOf() and search(). Their usage:

// StringObject.indexOf(searchvalue,fromindex)
// StringObject.lastIndexOf(searchvalue,fromindex)
// StringObject.search(searchvalue/regexp)

// indexOf() retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).

// lastIndexOf() retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).

// Usage of search() is similar to indexOf(). It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option "g" of regular expressions).

// Here we use some examples to illustrate their usage and difference:

// var str="Hello World!";
// console.log(str.indexOf("e"))
// console.log(str.lastIndexOf("e"))
// console.log(str.search("e"))
// //output:
// 1
// 1
// 1

// We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example:

// var str="Hello World!";
// console.log(str.indexOf("o"))
// console.log(str.lastIndexOf("o"))
// console.log(str.search("o"))
// //output:
// 4
// 7
// 4

// We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example:

// var str="Hello World!";
// console.log(str.indexOf("o",5))
// console.log(str.lastIndexOf("o",5))
// console.log(str.search("o"))
// //output:
// 7
// 4
// 4

// We can see, indexOf() returned 7, because it start retrieves from index 5 to the right; lastIndexOf() returned 4 because it start retrieves from index 5 to the left;. search() always returned the first "o". Look at the following example:

// var str="Hello World!";
// console.log(str.indexOf("world"))
// console.log(str.lastIndexOf("world"))
// console.log(str.search(/world/i))
// console.log(str.search(/word/i))
// //output:
// -1
// -1
// 6
// -1

// From this example we can see that indexOf() and lastIndexOf() can not find "world" in str, because "World" and "world" are diffrent; search() uses a regular expression, the option i allows it to ignore the case(Regular expressions are powerful and complex, and we will learn it later). when the search string is not found, they always return -1;

// Ok, lesson is over. let's us do some task.
// Task

// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

// Series

// ( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

//     #1: create your first JS function helloWorld
//     #2: Basic data types--Number
//     #3: Basic data types--String
//     #4: Basic data types--Array
//     #5: Basic data types--Object
//     #6: Basic data types--Boolean and conditional statements if..else
//     #7: if..else and ternary operator
//     #8: Conditional statement--switch
//     #9: loop statement --while and do..while
//     #10: loop statement --for
//     #11: loop statement --break,continue
//     #12: loop statement --for..in and for..of
//     #13: Number object and its properties
//     #14: Methods of Number object--toString() and toLocaleString()
//     #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//     #16: Methods of String object--slice(), substring() and substr()
//     #17: Methods of String object--indexOf(), lastIndexOf() and search()
//     #18: Methods of String object--concat() split() and its good friend join()
//     #19: Methods of String object--toUpperCase() toLowerCase() and replace()
//     #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//     #21: Methods of String object--trim() and the string template
//     #22: Unlock new skills--Arrow function,spread operator and deconstruction
//     #23: methods of arrayObject---push(), pop(), shift() and unshift()
//     #24: methods of arrayObject---splice() and slice()
//     #25: methods of arrayObject---reverse() and sort()
//     #26: methods of arrayObject---map()
//     #27: methods of arrayObject---filter()
//     #28: methods of arrayObject---every() and some()
//     #29: methods of arrayObject---concat() and join()
//     #30: methods of arrayObject---reduce() and reduceRight()
//     #31: methods of arrayObject---isArray() indexOf() and toString()
//     #32: methods of Math---round() ceil() and floor()
//     #33: methods of Math---max() min() and abs()
//     #34: methods of Math---pow() sqrt() and cbrt()
//     #35: methods of Math---log() and its family
//     #36: methods of Math---kata author's lover:random()
//     #37: Unlock new weapon---RegExp Object
//     #38: Regular Expression--"^","$", "." and test()
//     #39: Regular Expression--"?", "*", "+" and "{}"
//     #40: Regular Expression--"|", "[]" and "()"
//     #41: Regular Expression--""
//     #42: Regular Expression--(?:), (?=) and (?!)

// eslint-disable-next-line no-unused-vars
function firstToLast(str, c) {
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : str.search(c);
}

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(firstToLast("ababc","a") , 2);
//     Test.assertSimilar(firstToLast("ababc","c") , 0);
//     Test.assertSimilar(firstToLast("ababc","d") , -1);
//   });
// });
