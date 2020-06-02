
const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let winningSeason = record.find(function(season) {return season["result"] === "W"})
  if (!!winningSeason) {
    return winningSeason["year"]
  } else {
    return undefined
  }
}

