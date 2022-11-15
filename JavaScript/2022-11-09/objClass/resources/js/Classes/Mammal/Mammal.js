import { Animal } from '../Animal.js';
 
export class Mammal extends Animal {
    constructor(legs, color, gender, warmBlooded, herbivore) {
      super();
      this.legs = legs;
      this.color = color;
      this.gender = gender;
      this.herbivore = herbivore;
      this.warmBlooded = warmBlooded;
    }
    milkFeeding() {
      return 'Feeding...';
    }
  }