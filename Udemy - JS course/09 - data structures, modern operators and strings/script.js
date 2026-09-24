// destructuring array

"use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // let say we have a array:

// let arr = [1,3,4,5]
// // to destructure it

// let [x,y,z,a] = arr

// praticed the below challenges

// // ARRAY DESTRUCTURING: CODING CHALLENGES
// // ==========================================

// // ------------------------------------------
// // Challenge 1: Basic Destructuring
// // ------------------------------------------
// // Extract the first and second elements from the 'colors' array
// // into variables named 'primary' and 'secondary'.

// const colors = ['red', 'blue', 'green', 'yellow'];

// // TODO: Write your destructuring code here
// // const [primary, secondary] = colors

// console.log(primary, secondary); // Expected output: 'red' 'blue'

// // ------------------------------------------
// // Challenge 2: Skipping Elements
// // ------------------------------------------
// // Extract the first and fourth runners into variables
// // named 'goldMedalist' and 'runnerUp'. Skip the others.

// const raceResults = ['Alice', 'Bob', 'Charlie', 'Diana'];

// // TODO: Write your destructuring code here
// // const [goldMedalist, , , runnerUp ] = raceResults

// console.log(goldMedalist, runnerUp); // Expected output: 'Alice' 'Diana'

// // ------------------------------------------
// // Challenge 3: Default Values
// // ------------------------------------------
// // Destructure the 'user' array to get 'username' and 'role'.
// // If the array doesn't provide a second value, set 'role' to 'guest' by default.

// const user = ['cool_dev99'];

// // TODO: Write your destructuring code here
// // ==========================================
// // const [username, role = 'guest' ] = user

// console.log(username, role); // Expected output: 'cool_dev99' 'guest'

// // ------------------------------------------
// // Challenge 4: The Rest Pattern (...)
// // ------------------------------------------
// // Extract the first element into a variable 'champion'.
// // Put all the remaining elements into a new array called 'contenders'.

// const fighters = ['Ryu', 'Ken', 'Chun-Li', 'Guile'];

// // TODO: Write your destructuring code here
// // const [champion, ...contenders] = fighters
// console.log(champion); // Expected output: 'Ryu'
// console.log(contenders); // Expected output: ['Ken', 'Chun-Li', 'Guile']

// // ------------------------------------------
// // Challenge 5: Swapping Variables
// // ------------------------------------------
// // Swap the values of 'a' and 'b' using array destructuring.
// // Do NOT use a temporary third variable.

// let a = "I should be second";
// let b = "I should be first";

// // TODO: Write your destructuring code here
// [a,b] = [b,a]

// console.log(a, b); // Expected output: "I should be first" "I should be second"

// // ------------------------------------------
// // Challenge 6: Nested Destructuring
// // ------------------------------------------
// // Extract the values '1', '5', and '6' from this nested array
// // into variables named 'one', 'five', and 'six'.

// const numbers = [1, 2, [3, 4, [5, 6]]];

// // TODO: Write your destructuring code here
// // const [one , , [, , [ five , six]]] = numbers

// console.log(one, five, six); // Expected output: 1 5 6

//

// const books = [
//   {
//     title: "Algorithms",
//     author: ["Robert Sedgewick", "Kevin Wayne"],
//     publisher: "Addison-Wesley Professional",
//     publicationDate: "2011-03-24",
//     edition: 4,
//     keywords: [
//       "computer science",
//       "programming",
//       "algorithms",
//       "data structures",
//       "java",
//       "math",
//       "software",
//       "engineering",
//     ],
//     pages: 976,
//     format: "hardcover",
//     ISBN: "9780321573513",
//     language: "English",
//     programmingLanguage: "Java",
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Structure and Interpretation of Computer Programs",
//     author: [
//       "Harold Abelson",
//       "Gerald Jay Sussman",
//       "Julie Sussman (Contributor)",
//     ],
//     publisher: "The MIT Press",
//     publicationDate: "2022-04-12",
//     edition: 2,
//     keywords: [
//       "computer science",
//       "programming",
//       "javascript",
//       "software",
//       "engineering",
//     ],
//     pages: 640,
//     format: "paperback",
//     ISBN: "9780262543231",
//     language: "English",
//     programmingLanguage: "JavaScript",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ["Randal E. Bryant", "David Richard O'Hallaron"],
//     publisher: "Prentice Hall",
//     publicationDate: "2002-01-01",
//     edition: 1,
//     keywords: [
//       "computer science",
//       "computer systems",
//       "programming",
//       "software",
//       "C",
//       "engineering",
//     ],
//     pages: 978,
//     format: "hardcover",
//     ISBN: "9780130340740",
//     language: "English",
//     programmingLanguage: "C",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Operating System Concepts",
//     author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
//     publisher: "John Wiley & Sons",
//     publicationDate: "2004-12-14",
//     edition: 10,
//     keywords: [
//       "computer science",
//       "operating systems",
//       "programming",
//       "software",
//       "C",
//       "Java",
//       "engineering",
//     ],
//     pages: 921,
//     format: "hardcover",
//     ISBN: "9780471694663",
//     language: "English",
//     programmingLanguage: "C, Java",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: "Engineering Mathematics",
//     author: ["K.A. Stroud", "Dexter J. Booth"],
//     publisher: "Palgrave",
//     publicationDate: "2007-01-01",
//     edition: 14,
//     keywords: ["mathematics", "engineering"],
//     pages: 1288,
//     format: "paperback",
//     ISBN: "9781403942463",
//     language: "English",
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "The Personal MBA: Master the Art of Business",
//     author: "Josh Kaufman",
//     publisher: "Portfolio",
//     publicationDate: "2010-12-30",
//     keywords: ["business"],
//     pages: 416,
//     format: "hardcover",
//     ISBN: "9781591843528",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: "Crafting Interpreters",
//     author: "Robert Nystrom",
//     publisher: "Genever Benning",
//     publicationDate: "2021-07-28",
//     keywords: [
//       "computer science",
//       "compilers",
//       "engineering",
//       "interpreters",
//       "software",
//       "engineering",
//     ],
//     pages: 865,
//     format: "paperback",
//     ISBN: "9780990582939",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: "Deep Work: Rules for Focused Success in a Distracted World",
//     author: "Cal Newport",
//     publisher: "Grand Central Publishing",
//     publicationDate: "2016-01-05",
//     edition: 1,
//     keywords: ["work", "focus", "personal development", "business"],
//     pages: 296,
//     format: "hardcover",
//     ISBN: "9781455586691",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;

// //
// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;

// //
// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;

// spread and rest operators

// // ADVANCED JS CHALLENGES: DESTRUCTURING, SPREAD & REST
// =======================================================

// ------------------------------------------
// Challenge 1: Deep Extraction & Default Values
// ------------------------------------------
// This represents a complex API response.
// 1. Extract the 'rating' of the FIRST product and rename it to 'topRating'.
// 2. Extract the 'rating' of the SECOND product, rename it to 'secondRating',
//    and provide a default value of 0 (since it doesn't exist).

// const apiResponse = {
//   status: 'success',
//   data: {
//     products: [
//       { id: 1, name: "Laptop", metrics: { sales: 500, rating: 4.8 } },
//       { id: 2, name: "Mouse", metrics: { sales: 300 } }
//     ]
//   }
// };

// // TODO: Write your destructuring code here (try to do it in one single line/statement)
// const { data:{products:[{metrics:{rating: topRating}}, {metrics:{rating:secondRating = 0 }}]}} = apiResponse

// console.log(topRating);    // Expected output: 4.8
// console.log(secondRating); // Expected output: 0

// // ------------------------------------------
// // Challenge 2: Immutable Updates (Nested Spread)
// // ------------------------------------------
// // You need to update this game state WITHOUT mutating the original object.
// // Create a new object called 'newGameState' where:
// // 1. The 'level' is increased to 6.
// // 2. 'Potion' is added to the END of the 'inventory' array.
// // 3. 'mana' inside 'stats' is decreased to 40.
// // WARNING: You must use the spread operator carefully to avoid shallow copy mutations!

// const gameState = {
//   player: "Hero",
//   level: 5,
//   inventory: ["Sword", "Shield"],
//   stats: { hp: 100, mana: 50 }
// };

// // TODO: Write your spread operator code here
// const newGameState = {...gameState, level:6, inventory: [...gameState.inventory,"Potion"], stats:{...gameState.stats, mana: 40} }

// console.log(newGameState.level);               // Expected: 6
// console.log(newGameState.inventory);           // Expected: ["Sword", "Shield", "Potion"]
// console.log(newGameState.stats.mana);          // Expected: 40
// console.log(gameState.inventory.length === 2); // Expected: true (Original must not be mutated!)
// console.log(gameState.stats.mana === 50);      // Expected: true (Original must not be mutated!)

// // ------------------------------------------
// // Challenge 3: Function Parameters (Rest & Destructuring)
// // ------------------------------------------
// // 1. Modify the function signature to accept a 'discount' number as the first parameter,
// //    and use the REST parameter to gather all remaining arguments into a 'transactions' array.
// // 2. Inside the map function, destructure each transaction object directly in the parameter list.
// //    Extract 'price' and 'qty', setting a default 'qty' of 1 if it is missing.

// // TODO: Update the function signature
// function calculateTotals( discount, ...transactions ) {

//   // TODO: Update the map parameter to destructure the objects
//   return transactions.map( ( { price, qty = 1 }) => {
//     return (price * qty) - discount;
//   });
// }

// const obj1 = { price: 50, qty: 2 };
// const obj2 = { price: 30 }; // qty is missing

// // We pass the discount (10) first, then spread an array of transaction objects
// const finalTotals = calculateTotals(10, obj1, obj2);

// console.log(finalTotals); // Expected output: [90, 20]
// // (50 * 2) - 10 = 90
// // (30 * 1) - 10 = 20

// short circuiting

// &&
// when comapring two or more values like this: let x = 1 && "100" && false
// since && operator works by showing ouput true by reciveing all inouts as true
// for and operator, in short circuiting, it returns the last truthy value or first falsy value
// meaning let x = 1 && 2 will get 2 in it or let x = false && 1 && true will get false in it
// (last truthy or first falsey value)

// ||
// or operator works oppositly as compared to  && , it returns the first truthy value or the last falsey value if every input is false

// x = 1 || 0 => x = 1 , x = 0 || null => x = null
// this arises problems like:

// // hall acept min of 10 geusts or under a scenario the hall can not accomodate any, below case represents the unable accomodation
// let hallLimit = 0
// // but exppected guests will recive 10 guests as because or operator short ciruited on 0 as falsey value
// let expectedGuests = hallLimit || 10

// to avoid such problem we have nulish coalescing ?? operator
// it only checks for nullish values like null or undefined instead of falsey values
// let hallLimit = 0
// let expectedGuests = hallLimit ?? 10

// set

// sets are data structures that contain all unique elements in a array-like structure but with curly braces
// the order of the items is not specific, it is random
// to create a new set we do let orderSet = new Set(["Pasta", "Pizza", "risoto", "risoto"])
// this would return {"Pasta", "Pizza", "risoto"} while eliminating all duplicating items
// set use hash maps to save elements in memory
// set has has(),add(),clear(),delete() methods to mutate

// to remove duplicates from an array, we can use the following method
// let dupArray = ["pizza", "piazza", "pineapple", "purple"];
// let dupSet = new Set(dupArray);
// let uniqueArray = [...dupSet]; or
// let uniqueArray = [...new Set(dupArray)]
// console.log(uniqueArray);

// to check how many unique elements are present in an array we can use the above example
// let uniqueElements = Set(dupArray).size;
//
// some new methods were introduced:
// union
// it takes two sets and return a new set with all the unique elements of both sets
// let firstSet = new Set(["ali, hashim"]); // => {'ali','hashim'}
// let secondSet = new Set(["shujaat"]); // => {'shujaat'}
// let unionSet = firstSet.union(secondSet); // => {'shujaat','ali','hashim'}

//intersection
// this return set with only unique elements common in both sets
// let firstSet = new Set(["ali", "hashim"]); // => {'ali','hashim'}
// let secondSet = new Set(["ali","shujaat"]); // => {'ali,shujaat'}
// let unionSet = firstSet.inersection(secondSet); // => {'shujaat','ali','hashim'}

// deifference

// this returns elements of first set that  are not present in the second set
// let firstSet = new Set(["ali", "hashim"]); // => {'ali','hashim'}
// let secondSet = new Set(["ali","shujaat"]); // => {'ali,shujaat'}
// let unionSet = firstSet.difference(secondSet); // => {'hashim'}

// symmetric difference
// gives uniques elements from both sets that are not common
// let firstSet = new Set(["ali", "hashim"]); // => {'ali','hashim'}
// let secondSet = new Set(["ali","shujaat"]); // => {'ali,shujaat'}
// let unionSet = firstSet.symmetricDifference(secondSet); // => {'hashim', 'shujaat'}

// strings

// strings has many useful properties an  methods like arrays do
// string.length gives the length of the string like a array
// we can access any character of a string by accessing its index
// let str = 'hashim'
// console.log(str[1]) // => 'a'
// or we can check the index of a character
// str.indexOf('a') => 1, it returns the index of first matching element
// similarly we can get the last index of multiple elements
// str.lastIndexOf('h') // => 3
// if a string does not have a charater, whose index we are trying to look up, it simply returns -1

// we can get the starting index of an entire word
// str = 'my name is hashim'
// str.indexof('hashim') // => 11

// we can get a specific part of a string
// str.slice(starting index) // => this returns a string that start from that index and ends at the last index of the original string
// we can also pass in the ending index like string.slice(starting index, ending index) returns the charactter starts from the starting index and ends before the ending index, the ending index is not included

// we have toLowerCase and toUpperCase methods to completly turn the string into lower case and uppercase
// let nameStr = 'hashim' // => nameStr.toUppercase()
// let nameStr2 = 'HASHIM' // => nameStr.toLowerCase()
// let trimmedEmail = ' Hashim@email.com ' // => removes empty space from the start and the end of string
// we have trimStart() and trimEnd() to remove empty spaces from the start and from the end seperately
// to replace a character from the specific index in a array, we can use .replace('charcter to be replaced', 'character to replace with') - this replace the first occurence of the character
// to replace all the occurences we use replaceAll()
// we can replace complete words with .replace() method

// we can check if a string starts with a certain sub string or not
// we use .stratsWith() to check this

// let role = "admin hasim"
// let isAllowed = role.startsWith('admin ')? true : false
// we can also check is a string ends with a certain substring using endsWith()
