const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (records) => {
  let winner = records.find(element => {
    return element.result === "W"}) 
   return !!winner ? winner.year : undefined
  };