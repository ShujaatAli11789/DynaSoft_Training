let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

function calcTip(bill){
    let tip= (bill>=50 && bill<=300)? bill*(15/100) : bill*(20/100)
    return tip
}
for(let i = 0; i<10; i++){
    tips.push(calcTip(bills[i]))
    totals.push(tips[i]+bills[i])
}

function calcAverage(ARR){
let sum =0
for(let i = 0 ; i<ARR.length; i++){
        sum += totals[i]
    }
    let avg = sum / ARR.length
  return avg
}

console.log(tips)
console.log(calcAverage(totals))

