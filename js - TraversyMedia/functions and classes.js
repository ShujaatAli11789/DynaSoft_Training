// fucntions: they introduce reuseability in the code 
function add(n1,n2){
    return n1 + n2
}
add(1,1)

// we have arrow functions, that assign fucntion expression to a variable this changes hoisting and memory allocation in exection context 
let sub = (n1,n2)=>{
    return n1-n2
}
sub(1-1)
// callback fucntions - where fucntions are passed as another fucntion's parameter
// higher order functions - the function in whose parameter we are passing a function is known as higher order function
// arrays methods like foreach is the best example of this


// constructor fucntions - returns a new object of parameters we pass in with name of the function as prefix
// we have built in functions like like Date()
function Person(name, age){
    this.name = name
    this.age = age
    this.dob = new Date(dob)
    
}

Person.prototype.getBirthYear = function(){return this.dob.getFullYeard}

// below step is known as intantiatig the object
const newPerson1 = new Person("Hashim",23,'31-12-2002')
const newPerson2 = new Person("ali",23, '03-01-2003')


// 
class PersonClass{
    constructor(name, age){
    this.name = name
    this.age = age
    this.dob = new Date(dob)
    }
     getBirthYear = function(){return this.dob.getFullYeard}
}
const newPerson3 = new PersonClass("ali",23, '03-01-2003')