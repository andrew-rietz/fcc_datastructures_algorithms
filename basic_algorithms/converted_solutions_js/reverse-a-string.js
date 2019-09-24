function reverseString(str) {
  let letter;
  let newStr = '';
  for (letter of str){
    newStr = letter + newStr;
  }
  return newStr;
}

console.log(reverseString("hello"));
