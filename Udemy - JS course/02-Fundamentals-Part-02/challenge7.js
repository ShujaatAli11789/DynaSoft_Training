let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass / (this. height * this.height)
        return this.bmi
    }
}
let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass / (this. height * this.height)
        return this.bmi
    }
}
let markBmi = mark.calcBMI()
let johnBmi = john.calcBMI()


let higherBmi = markBmi>johnBmi? mark : john
let lowerBmi = markBmi<johnBmi? mark : john

console.log(`${higherBmi.fullName}'s BMI (${higherBmi.bmi}) is higher than ${lowerBmi.fullName}'s BMI (${lowerBmi.bmi}) `)
