function bouncer(arr) {
  for (let i = arr.length; i >= 0; i--){
    if (!Boolean(arr[i])){
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
