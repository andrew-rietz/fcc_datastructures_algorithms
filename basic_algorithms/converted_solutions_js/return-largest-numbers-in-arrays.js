function largestOfFour(arr) {
  let subArr = [];
  let maxArrValues = [];
  for (subArr of arr){
    maxArrValues.push(Math.max.apply(Math, subArr))
  }
  return maxArrValues;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
