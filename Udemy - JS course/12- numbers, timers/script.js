// numbers, rounding
// Math.round
// Math.round() rounds to the nearest integer
// Math.round(4.4) => rounds to 4
// Math.round(4.5) => rounds to 5
// Math.round(-4.5) => rounds to 5

// Math.floor(4.1) => rounds down 4
// Math.floor(4.5) => rounds down 4

// Math.trunc(5.1) => cuts off the decimal (functional part) (5)
// Math.trunc(5.9) => cuts off the decimal (functional part) (5)

// Math.ceil(4.1) => always round up (5)
// Math.ceil(-4.1) => (-4)

// toFixed() returns a string
// (23.3).toFixed(0)=> rounds the demicals (by passing 0) it completly removes the decimal part
// (23.3).toFixed(3)=> rounds the demicals t0 (23.300) string
// (23.3).toFixed(3)=> rounds the demicals (23.300) string
// (23.335).toFixed(2)=> rounds the demicals (23.34) string
// (23.334).toFixed(2)=> rounds the demicals (23.33) string

// generating random numbers 

// to generate random numbers we use Math.random() => it generates random floating value like 0.23141
// to specify which a range we use Math.random() * (maximum range) => Math.random() * 10 gives number from 0 to 9.some random decimal 
// to round the decimal we usually use Math.floor or Math.trunc and to include the maximum range number in the result we add 1 to the result like this:
// Math.floor(Math.random() * 10) + 1 generates beteen 1 and 10 

// to specify a range that does not start with a zero we can do this 

// const generateRand = (min, max) => Math.floor(Math.random() * (max-min+1) ) +min

