class Vegetable {
  "use strict";
  /* Alter code below this line */
  constructor(name){
    this.name = name;
  }
  /* Alter code above this line */
  //return Vegetable;
}
//const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
