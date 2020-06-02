const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let win = record.find(element => {
    return element.result === "W"
  }) 
   return !!win ? win.year : undefined
};