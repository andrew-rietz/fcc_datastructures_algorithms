let username = "JackOfAllTrades";
let userCheck = /[a-z][a-z]*\d*$/ig; // Change this line
let result = userCheck.test(username);

console.log("JACK".match(userCheck))
