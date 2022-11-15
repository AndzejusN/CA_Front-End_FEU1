export class Animal {
    constructor(legs, color, gender, warmBlooded) {
      this.legs = legs;
      this.color = color;
      this.gender = gender;
      this.warmBlooded = warmBlooded;
    }
    eat() {
      return "I'm eating.";
    }
    sleep() {
      return "I'm sleeping.";
    }
    renderText(text, selector) {
      if (!text || !selector) return;
      const element = document.querySelector(selector);
      element.textContent = text;
    }
    getAllParameters(){
      let output = `Have/has legs: ${this.legs};
      Color is: ${this.color};
      Gender is: ${this.gender}
      WarmBlooded: ${this.gender}`;
      return output;
    }

    getPropertiesValues() {
      return Object.values(this);
   } 

  }