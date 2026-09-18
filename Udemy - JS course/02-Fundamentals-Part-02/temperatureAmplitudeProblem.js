const temperatures = [3,-2,-6,-1, "error", 9,13,17,15,14,9,5]
function ampCalc(temperatures){
    highPoint = 0
    lowPoint = 0
    for(let i=0; i<temperatures.length;i++){
        if(typeof temperatures[i] != 'number') continue
        if (temperatures[i]>highPoint) highPoint = temperatures[i]
        if (temperatures[i]<lowPoint) lowPoint = temperatures[i]
    }

    return highPoint - lowPoint
}
let diff = ampCalc(temperatures)
console.log(diff)