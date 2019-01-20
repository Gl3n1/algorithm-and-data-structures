function score( dice ) {
  //dice is array
  const scoreObj = {};
  const totalscoreArr = [];
  dice.forEach(num=>{
    if(scoreObj[num]) {
      return scoreObj[`${num}`]+=1;
    } else {
      return scoreObj[`${num}`] = 1;
    }
  })

  console.log(scoreObj)
  for(let num in scoreObj) {
    console.log([num , scoreObj[num]])
    if(num === '1') {
      if(scoreObj[num] === 5) {
        totalscoreArr.push(1200)
      } else if (scoreObj[num] === 4) {
        totalscoreArr.push(1100)
      } else if (scoreObj[num] === 3) {
        totalscoreArr.push(1000)
      } else if (scoreObj[num] === 2) {
        totalscoreArr.push(200)
      } else {
        totalscoreArr.push(100)
      }
      
    } else if ( num === '6' && scoreObj[num] >= 3) {
      totalscoreArr.push(600)
    } else if (num === '5') {
      if(scoreObj[num] === 5) {
        totalscoreArr.push(600)
      } else if (scoreObj[num] === 4) {
        totalscoreArr.push(550)
      } else if (scoreObj[num] === 3) {
        totalscoreArr.push(500)
      } else if (scoreObj[num] === 2) {
        totalscoreArr.push(100)
      } else {
        totalscoreArr.push(50)
      }
    } else if (num === '4' && scoreObj[num] >= 3) {
      totalscoreArr.push(400)
    } else if (num === '3' && scoreObj[num] >= 3) {
      totalscoreArr.push(300)
    } else if (num === '2' && scoreObj[num] >= 3) {
      totalscoreArr.push(200)
    } else {
      console.log('0')
    }
  }
  console.log(totalscoreArr)
  return totalscoreArr.length !== 0 ? totalscoreArr.reduce((a,b)=>a+b) : 0
}

console.log(score( [1, 1, 1, 3, 3] ))

// Terrible solution :/