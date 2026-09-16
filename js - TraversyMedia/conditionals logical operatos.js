// in js we have logical operators that return depending on the input
// && return true when both the inputs are true
// || return true even if a single input is true
// ! flips the boolean value, if true, it becomes false and false becomes true


// conditionals 
//  if/else if the conditon is true if-block is executed otherwise else block is executed
let x=5
if(x===5){
    console.log("x is 5")
}else{ console.log("x is 5")}
// we can use logical operators like 
if (x ===5 && x<10){
    console.log('ok')
}

if (x ===5 || x>10){
    console.log('ok')
}
// we have another conditional statement know as ternary operator 

let y = 10
console.log(`${x>10 ? "black": "white"}`)

// we have switch statements 
let color = 'white'
switch(color){
    case "white":
        console.log(color)
        break
    case "black":
        console.log(color)
        break
    default: 
        console.log("no idea abuot color")
        break        
}