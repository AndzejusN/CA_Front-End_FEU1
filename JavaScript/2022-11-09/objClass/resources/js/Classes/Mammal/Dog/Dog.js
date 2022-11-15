import { Mammal } from '../Mammal.js';
 
export class Dog extends Mammal {
    constructor(legs, color, gender, warmBlooded, herbivore, barking, name) {
      super(legs, color, gender, warmBlooded, herbivore);
      this.barking = barking;
      this.name = name;
    }
    bark() {
      if (this.barking) {
        return "I'm barking.";
      } else {
        return "I can't bark.";
      }
    }
    getInfo() {
      return `Color is ${this.color} and have ${this.legs} legs...`;
    }
  }