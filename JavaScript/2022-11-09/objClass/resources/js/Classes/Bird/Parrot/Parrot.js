import { Bird } from '../Bird.js';

class Parot extends Bird {
    constructor (legs, color, gender, warmBlooded, canFly, canReproduceSpeech) {
    super(legs, color, gender, warmBlooded, canFly);
    this.canReproduceSpeech = canReproduceSpeech;
    }

    speaking() {
        if(this.canReproduceSpeech) {
            return `Now I'm speaking do not disturb me please ...`;
        } else {
            return;
        }
    }
}