// strict mode
// "use strict";
// strict mode is activated in javascript by adding a 'use strict' in the script file we can add strict mode to a single code block like a function or to a whole script file
// strict mode will only apply to the code placed under the 'use strict' and if there is any code above it, the strict mode will not be activated
// strict mode helps us to avoide accidental bugs
// strict mode throws errors in the developer mode during runtime to catch errors that would just be ingnored in the sloppy mode and cause the code to fail silently
"use strict";

// let hasDriversLicense = false
// if (hasDriversLicense == false) hasDriverLicense = true
// console.log(hasDriversLicense)

// if strict mode is on the above code will throw error a reference error, otherwise it would just just silently run the code and create a memory in the global scope for the hasDriverLicense
// stict mode also does not let the already reserved words to be used as variable names and declaration

// fucntions
// functions hold line or lines of code that can be sued again and again in code just like a variable holds a value
// functions are designd on the principle of DRY, "Dont repeat yourself", meaning if there is a section or code block that is supposed to execute multiple times in code, this block shouldnt be written multiple times in the code, write once and call it multiple times

// function logger (){
//     console.log('My Name is Hashim')
// }

// logger() // <= fucntion invocation  or calling a function
// logger() // everytime you invoke a function an output 'My Name is Hashim' will print on to the console window
// // fucntions can take data (parameters) and can return data

// // in function statements the values passed are known as parameters
// function fruitProcessor (apples, oranges){
//     console.log(apples,oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
// // in function invocation the values passed are known as function arguments
// const appleJuice = fruitProcessor(5,0)
// // the fucntion will only execute when it is called, otherwise the the js engine will not execute the block
// // NOTE: not every function returns anything and not every function takes parameters
// // for a function like fucntion greet(){ console.log("hello")}, it only prints and and does not return anything physcially, but under the hood it returns undefined
// // console.log() is a built-in function

// function daclartions vs function expressions

// fucntion greet(){ return "hello" }
// the above function is a functon declaration
// they can be invoked before the are defined in the code like this:

// let age1Res = calcAge1(2002);
// function calcAge1(birthYear) {
//   return 2026 - birthYear;
// }
// function expression
// in fucntion expression, an anonymous funciton is assignd to a variable
// unlike the function statements, the function expression cant be invoke before the function definition
// this is because of hoisting in JS

// let age2Res = calcAge2(2002);
// let calcAge2 = function(birthYear) {
//   return 2026 - birthYear;
// } if this code is run, this would give a reference error

// the below code would not
// let calcAge2 = function(birthYear) {
//   return 2026 - birthYear;
// }
// let age2Res = calcAge2(2002);

// arrow functions
// they are similar to function expressions
//    birthYear => 2026-birthYear
//    or
// let calcAge3 = birthYear => 2026-birthYear
// let ageRes3 = calcAge3(2002)
// console.log(ageRes3)

// calling functions inside another function

// let yearsUntilRetirement =(birthyear, firstName)=> {
//     let age = calcAge3(birthyear)
//     let retirement = 60 - age
//     return `${firstName} reitres in ${retirement} years`
// }
// console.log(yearsUntilRetirement(2002, 'Hashim'))

// function cutPieces (fruit){
//     return fruit * 4
// }
// function fruitProcessor (apples, oranges){
//     let applePieces = cutPieces(apples)
//     let orangePieces = cutPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} piece of oranges.`
//     return juice
// }
// console.log(fruitProcessor(2,5))
//
// objects: dot vs bracket notation
// objects are non primitive data structures
// we can store muiple type of dat as key:value pair
// to access them, we use either bracket with keys or dot notation]
// let person = {
//     fullname : "Shujaat Ali Hasim",
//     hobbies: ["coding", 'gaming', 'movies']
//     , task: ()=>{
//         console.log('executing task')
//     }
// }
// the above code block represents a object. To access these values , we use dot notation or brackets

// person.fullname // or
// person['fullname']

// dot notation has higher precedence than the bracket notation
// object methods: functions inside objects are known as methods
// to access a property of a object inside the object we use 'this' keyword
// let person = {
//   fullName : "Shujaat Ali Hashim",
//   birthYear : 2002
//   ,
//   hobbies:['gaming', 'movies'],
//   age: function(currentYear){
//     return currentYear - this.birthYear
//   }
// }
// console.log(person.age(2026))
// we can use this keyword to create new properties

// let person = {
//   fullName : "Shujaat Ali Hashim",
//   birthYear : 2002
//   ,
//   hobbies:['gaming', 'movies'],
//   calcAge: function(currentYear){
//     this.age =  currentYear - this.birthYear
//     return this.age
//   }
// }
// console.log(person.calcAge(2026))
// console.log(person.age)
// in the previous scenario, the age method would cost computational cost if it was called multiple times
// now with the calcAge method is called only once and creates a new proerty while doing so, now we can directly call the property without the additional compuation cost

// challenge - create a summary
// let person = {
//   fullName: "Shujaat Ali Hashim",
//   birthYear: 2002,
//   dirversLicense: true,
//   hobbies: ["gaming", "movies"],
//   calcAge: function (currentYear) {
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary =`${this.fullName} is a ${this.age} year old man and he has ${this.age >= 18 ? "a" : "no"} dirvers license`;
//     return this.summary
//   },
// };
// console.log(person.calcAge(2026));
// person.getSummary()
// console.log(person.summary);

// loops