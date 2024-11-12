





function forURL(...item) {
  var globObj = []
  
  for (let i = 0; i < item.length; i++) {
    let Obj = {
     url : item[i][0],
     text : item[i][1]
    }
    globObj.push(Obj)
  }
  return globObj
} 


const hsl = forURL(["/", "Home"],["/detail", "page"],["#", "Component"], ["#", "Download"])


console.log(hsl);