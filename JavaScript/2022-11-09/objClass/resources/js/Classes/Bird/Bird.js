import { Animal } from '../Animal.js';

export class Bird extends Animal {
    constructor(legs, color, gender, warmBlooded, canFly){
        super(legs, color, gender, warmBlooded);
        this.canFly = canFly;
    }

    flying() {
        if (this.canFly) {
        return `I'm flying now ...`;
        } else {
            return;
        }
    }
}