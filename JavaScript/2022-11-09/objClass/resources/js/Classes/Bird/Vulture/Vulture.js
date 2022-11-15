import { Bird } from '../Bird.js';

export class Vulture extends Bird {

    constructor (legs, color, gender, warmBlooded, canFly, canEatDeadFlesh) {
        super(legs, color, gender, warmBlooded, canFly);
        this.canEatDeadFlesh = canEatDeadFlesh;
        }
        
    eatingDeadFlesh() {
        if(this.canEatDeadFlesh) {
            return `Now I'm eating dead flesh yum yum so delicious ...`;
        } else {
            return;
        }
    }
}