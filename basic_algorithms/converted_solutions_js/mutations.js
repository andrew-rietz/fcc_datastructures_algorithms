function mutation(arr) {
  let firstWord = arr[0].toLowerCase()
  let secondWordLetters = arr[1].toLowerCase().split("")
  let diff = secondWordLetters.filter(
    letter => !firstWord.includes(letter));
  return diff == ""
}

console.log(mutation(["hello", "hey"]))
