// strings properties and methods 

let string = 'this is a string'
// string concatenation 
// we can join 2 strings using + operator 
let concatenatedSting = 'string is '+ "concatenated"

// template literals
// bfore this we used the concatenation operator to push values into strings like this 
let name = "Shujaat"
concatenatedSting = 'my nmae is ' + name
// now s
concatenatedSting = `my name is ${name}`

// .length 
// this gets length of the string 

console.log(string.length)
// toUpperCase()
console.log(string.toUpperCase())
// toLowerCase()
console.log(string.toLowerCase())
// .substring(starting string index, next index of required last string index) 
console.log(string.substring(0,5))
// we can bundle multiple string mehtods together 
console.log(string.substring(0,5).toUpperCase())
// .split() returns an array with each character as a array index
console.log(string.split())
// we can pass arguments to customize split 
let technologies = 'React, Mongo, Node, Express'
console.log(technologies.split(', '))
