function titleCase(str) {
  let words = str.toLowerCase().split(" ")
  let titleCase = words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return titleCase.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
