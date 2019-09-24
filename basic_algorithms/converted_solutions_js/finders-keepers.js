function findElement(arr, func) {
  let item;
  for (item of arr){
    if (func(item)){
      return item;
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
