function map(src, cb) {
  let arr = []
  for (let i = 0; i < src.length; i++) {
    arr.push(cb(src[i]))
  }
  return arr;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
