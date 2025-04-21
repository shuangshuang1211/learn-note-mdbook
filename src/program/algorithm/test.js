Array.prototype.myReduce = function (callFn, initVal) {
  const arr = this;
  let acc = initVal !== undefined ? initVal : arr[0];
  let startIndex = initVal !== undefined  ? 0 : 1;
  console.log("++++ ", acc, arr);
  
  for (let i = startIndex; i< arr.length; i++) {
    
    acc = callFn.call(this, acc, arr[i], i, arr)
  }
  
  return acc;
}

const sumArr = [1,2,3].myReduce((acc, cur) => cur + acc, 0)
// console.log('++++ sumArr', sumArr);



function maxStackSize() {
  // TODO
  let count = 0;
  try {
    (function recurse() {
      count++;
      recurse();
    })();
  } catch(e) {
    console.log('++++ e', e);
    return count;
  }
}

console.log(maxStackSize())