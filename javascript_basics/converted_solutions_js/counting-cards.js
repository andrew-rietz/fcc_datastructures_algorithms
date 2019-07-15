var count = 0;

function cc(card) {
  // Only change code below this line
  var betOrHold = "Hold";
  var plusOne = [2, 3, 4, 5, 6];
  var minusOne = [10, "J", "Q", "K", "A"];

  switch(true){
    case plusOne.includes(card):
      count++;
      break;
    case minusOne.includes(card):
      count--;
      break;
  }

  if(count > 0){
    betOrHold = "Bet";
  }
  return count + " " + betOrHold;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
