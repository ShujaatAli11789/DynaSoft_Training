let js = "Amazing";
// if (js === "Amazing") alert("Javascript is amazing");
console.log("this will be logged onto the console tab of the browser");

// variable decalration 
// variables are containers that hold value 

let name = 'Hashim'

// rules of naming a variable 

// camelCase => twoWordsJoinegTogetherLikeThis
// snake_case => multiple_words_joined_like_this
// variable names shouldnt start with numbers but they can contain number in them or at the end
// variable names can not have special characters like: !@#%^&*()_+>?<, , but you can use $ or underscotre _ as shown in snake case
// we can not use reserved keywords like new this let const var function etc
// we shouldnt start variable name with capital letter, FullName but instead use fullName, as it is a covention, we declared Class names with capital keyword
// constants like PI are written with all capital letters 
// we should make sure that variable name is descriptive of the  value is holds in it


// Datatypes
// we do not need to assign data types to varibles, JS automatically dose that because in JS the value has datatype not the variable 
// Datatypes are primitive and non primitive(objects)
// we can check what value a variable is holding with typeof keyword

// primitive:
// Number(or floating point numbers)
// strings (all text in '' or "")]
// boolean true or false
// undefined 
// Null
// Symbol Value that is unique and can not be changed
// BigInt

// we can reassgin value of different datatype to the same variable

// Let, Const and Var
// we use let with variable that can change later(reassign)
let age= 31
age = 30
// we use const with values that can not be chnaged later
const birthYear = 2002
// reassigning the birthYear will throw error
// const variables must be assignd with initial value in the same line 

// Operators
// arithematic operators
// + - * / % ** 
// + addtion operator
// - subtraction operator
// * multipliation 
// / division operator
// ** exponential operator: 2**3 means 2 to the power of 3 or 2*2*2

// increment operator ++ 
// decrement operator --

// comparison operators: === >= <= != 


// string - Template literals
// this allows to use variables of different datatype in a string 
// it uses type coercion to convert those datatypes into string
// it also allows us to print in multi line format without without need the \n

// if/else 

let currAge = 17 
const eligibleAge = 18
if(currAge>=eligibleAge){
    console.log('You are eligible')
}else{
    let remYears =eligibleAge-currAge
    console.log(`wait for ${remYears ===1? 'a year': `${remYears} years` } `)
}

// type conversion and coercion
// it means to change the datatype of one variable to another 
// to convert from string to number we use Number(variable or string)
console.log(Number('50'))
// if a string contains a non-integer, it will return NaN (not a number)
// type conversion and coercion are both similar but have differences
// coercion is implicit, it is triggered automatically (meaning: operator between a number and a string triggers conercion depending in the operator)
// type conversion is explicit, it is triggered manualy by the the developer using String() or Number()

// type coercion example 
let n = '1' + 1 //=> n now has a string '11'
n = n - 1 // => n here has value number type 10

// for bool convervion we look into the tuthy and falsey values
// in Js there are only 5 falsey values 
// 0, undefined, null, NaN, and empty string ""
// other than these all other strings and Number are considered truthy and converted to true
// empty objects are also truthy 

// equality operators == or ===
// single = is assignment operator
// double == is lose equality operator beacuse it may also perform type coercion
// triple === is strict equality operator because it does not perform type coercion and also checks if the value being compared are of same data type

// boolean logic  
// all languages work on the curcuit gate logic, AND OR NOT
// AND or in js && only returns true if both inputs are true
// OR or in js || ony needs a single input tuthy to retrun true as output
// NOt or ! flips the input, if it is ture, it becomes false and vice versa 

let hasGoodVision = true
let hasLicense = true
let istired = false
if (hasGoodVision && hasLicense){
    console.log('you can drive')
}

if (hasLicense || istired){
    console.log('you can drive')
}

// or we can compare 3 values at the same time 

if (hasGoodVision && hasLicense || istired){
    console.log('you can drive')
}
// but it can introduce bugs, better way is to use paranthesis
if ((hasGoodVision && hasLicense) || istired){
    console.log('you can drive')
}

// switch statments 
// here a key passed and case mathing the key is executed

let day = 'monday'

switch(day){
    case 'monday':
        console.log("work week starts")
        break
    case 'tuesaday':
        console.log('complete previous day tasks')
        break
    case 'wednesday':
        console.log('prepare for the weekly meeting')
        break
    case 'thursday':
        console.log('make reports and presentation')
        break
    case 'friday':
        console.log('attend weekly meeting and make plan for the next week')
        break
    case 'saturday':
        console.log('have a hangout with firends')
        break
    case 'sunday':
        console.log('sleep whole day')
        break 
    default:
        console.log('not a valid input')                   
}
// break makes sure that only the case that matched runs and others are skipped 
// if there is no break statement the next case below will also execute 
// case act as a strict equality operator