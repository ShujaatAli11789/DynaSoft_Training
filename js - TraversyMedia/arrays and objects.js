//Arrays - holds mulitple values
// we can use construstor for to intialize an array, there is no restriction for those array to be of same data type
const Array = new Array(1,2,3,4)
// or we mostly use []
Array = [1,2,3,4]
// we access array items individually by calling their index 
Array[0]
//use .push to add items to the array at the end 
Array.push(5)
// .unshift() to add at the start
Array.unshift()
// .pop to delete from the end 
Array.pop()
// .shit() to delete the start 
Array.shift()
// .isArray() to check if a variable is a array
console.log(Array.isArray(Array))
// to check at which index a certain value is placed
console.log(Array.indexOf(2))

// objects are non primitive data structures, that store values in key pair structure 

let Hashim = {
    name: "Shujaat Ali Hashim",
    age: 23,
    isMale: true,
    hobbies: ['movies', 'games'],
    address: {
        home:220,
        sector: "C2"
    }
}

// to acces object's values we use "."

console.log(Hashim.name)
console.log(Hashim.hobbies[0])
console.log(Hashim.address.home)

// we can use destructuring

const {name, hobbies} = Hashim
// for embeded objects we can use following format 

const {address: {sector} } = Hashim

// we use arrays with objects to hold data 
let userData = [
    {name:"Ali" , email:"ali@email.com", pass:"123"},
    {name:"Ahmad" , email:"Ahmad@email.com", pass:"123"},
    {name:"Asfand" , email:"Asfand@email.com", pass:"123"},
]
// in full statck apps, we send data in json format, we can convert our objects in JSON format
JSON.stringify(userData)