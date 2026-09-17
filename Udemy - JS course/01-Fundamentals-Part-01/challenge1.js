// challenge 1 soltuion

// let heightMark = 1.69
// let massMark = 78

// let heightJohn = 1.95
// let massJohn = 92

let heightMark = 1.88
let massMark = 95

let heightJohn = 1.76
let massJohn = 85


let BMIMark = massMark / (heightMark * heightMark)
console.log(BMIMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIJohn)

let markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)