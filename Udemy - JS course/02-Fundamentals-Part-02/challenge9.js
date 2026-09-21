let tempArray= [17,21,23]

function tempString(tempArray){
  let str = '... '
  let day=1
  for(let i=0; i>=tempArray.length ; i++){
 
    str += `${tempArray[i]}C in ${day} ${day==1? 'day':'days'}`
    day++
  }
  str += ' ...'
}
let res = tempString(tempArray)
console.log(res)