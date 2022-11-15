import { Mammal } from '../Mammal.js';

export class Cat extends Mammal {
    constructor(legs, color, gender, warmBlooded, herbivore, canMiau, canMrrr) {
      super(legs, color, gender, warmBlooded, herbivore);
      this.canMiau = canMiau;
      this.canMrrr = canMrrr;
    }

    makeSounds() {
      if (this.canMiau && this.canMrrr) {
       return `I'm miau and mrrr`;
      } else if (this.canMiau && !this.canMrrr) {
        return `I'm miau`;
      } else if (this.canMrrr && !this.canMiau) {
        return `I'm mrrr`;
      } else {
        return `I'm weird cat... nor miau, nor mrrr`;
      }
    }
  }