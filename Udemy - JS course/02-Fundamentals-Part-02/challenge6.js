function calcTip(bill){
    let tip= (bill>=50 && bill<=300)? bill*(15/100) : bill*(20/100)
    return tip
}

let bills = [125,555,44]
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
let totals = [bills[0]+tips[0],bills[1]+tips[1],bills[1]+tips[1]]
