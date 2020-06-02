const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let obj = arr.find(obj => obj.result == 'W')
  return obj ? obj.year : obj
}