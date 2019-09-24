function frankenSplice(arr1, arr2, n) {
  let frankenArr = arr2.slice();
  for (let val of arr1.slice().reverse()){
    frankenArr.splice(n, 0, val);
  }
  return frankenArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
