function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");
  let word;
  for (word of words){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
