function map(src, cb) {
  let arr = []
  for (let i = 0; i < src.length; i++) {
    arr.push(cb(src[i]))
  }
  return arr;
}

function reduce(src, cb, starting){

let i=0;
let r=0;
  for (i=0; i< src.length; i++) {
    if( src[i] === false){
      return false }
    else if (src[i]===true){
      return true }
    else{
     r = cb(src[i],starting=0)
    }
    return r
  }
}

// ourceArray = [1,2,3]
//       startingPoint = 100
//       expect(reduce(sourceArray, function(e, memo){return e + memo}, startingPoint)).to.equal(106)


