class Thermostat{
  "use strict";
  /* Alter code below this line */
  constructor(tempF){
    this.temperature = tempF;
  }
  get tempF(){
    return this.temperature;
  }
  set tempF(tempF){
    this.temperature = tempF;
  }
  /* Alter code above this line */
  //return Thermostat;
}
//const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
