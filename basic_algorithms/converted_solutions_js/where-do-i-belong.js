function getIndexToIns(arr, num) {
  let index = (arr.map(function(val){
    return val < num;
  })).reduce((a, b) => (a + b), 0)

  return index;
}

console.log(getIndexToIns([40, 60], 50));
