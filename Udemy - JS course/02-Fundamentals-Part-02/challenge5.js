function calcAverage(s1,s2,s3) { 
    let totalScore = s1+s2+s3
  let avgScore = totalScore /3
  return  avgScore
}

let scoreDolphins =calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= (2*avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`)
    }
   else if (avgKoalas >=(2*avgDolphins)){
        console.log(`Koalas win (${avgKoalas} vs. ${ avgDolphins} )`)
   
    }else {console.log('No team wins...')}
}
checkWinner(scoreDolphins, scoreKoalas)