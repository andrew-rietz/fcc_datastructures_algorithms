const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((total, next_val) => total + next_val, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
