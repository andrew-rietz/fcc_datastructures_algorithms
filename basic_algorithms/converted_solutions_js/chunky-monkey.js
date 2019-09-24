function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i = i + size){
    newArr = newArr.concat(Array(arr.slice(i, i + size)));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
