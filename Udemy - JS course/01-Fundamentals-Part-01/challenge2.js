// challenge 2  soltuion

// let heightMark = 1.69
// let massMark = 78

// let heightJohn = 1.95
// let massJohn = 92

let heightMark = 1.88
let massMark = 95

let heightJohn = 1.76
let massJohn = 85
 
let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark, BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`)
}