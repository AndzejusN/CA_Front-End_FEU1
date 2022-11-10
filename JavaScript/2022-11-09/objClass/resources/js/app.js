// // Objekto kūrimo būdai

// // 1
// const obj1 = {
//     name: 'John',
//     surname: 'Doe',
//   }
  
//   console.log(obj1);
//   console.log(obj1.name);
//   console.log(obj1.surname);
  
//   // 2
//   // const obj2 = {};
//   const obj2 = new Object();
//   obj2.name = 'John';
//   obj2.surname = 'Doe';
  
//   console.log(obj2);
//   console.log(obj2.name);
//   console.log(obj2.surname);
  
//   // 3 - constructor function (pries ES6)
//   function Person(firstName, lastName) {
//     this.name = firstName;
//     this.surname = lastName;
//   }
  
//   const person1 = new Person('John', 'Doe');
//   console.log(person1);
//   console.log(person1.name);
//   console.log(person1.surname);
  
//   const person2 = new Person('Doe', 'John');
//   console.log(person2);
  
//   // 4
//   const personObj = {
//     isHuman: true,
//     printInstructions() {
//       if (this.isHuman) {
//         console.log(`Hello, my name is ${this.name}. I am a human.`);
//       } else {
//         console.log(`Hello, my name is ${this.name}. I am not a human.`);
//       }
//     }
//   }
  
//   console.log(personObj);
//   console.log(personObj.isHuman);
//   personObj.printInstructions();
  
//   const extendedPersonObj = Object.create(personObj);
//   console.log(extendedPersonObj);
//   extendedPersonObj.isHuman = false;
//   extendedPersonObj.name = 'John';
//   extendedPersonObj.printInstructions();
//   console.log(extendedPersonObj.isHuman);
  
//   // 5
//   const firstObj = { name: 'John' };
//   const secondObj = { surname: 'Doe' };
//   const finishedObj = { ...firstObj, ...secondObj };
//   console.log(finishedObj);
  
//   const finishedObj2 = Object.assign(firstObj, secondObj);
//   console.log(finishedObj2);
  
  // UŽDUOTIS
  // 0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3. +
  // 1. Visiems keturkampių objektams pridėti plotį ir aukštį. +
  // 2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą. +
  // 3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą. +
  // 4. Į konsolę išvesti visų keturkampių plotą ir perimetrą. +


let firstSquare = {
    length : 1,
    width : 2,
    countSpace() {
        return this.length * this.width;
    },
    countPerimeter() {
        return this.countSpace() * 2;
    },
    outputAllParameters(){
     return `Keturkampio plotas: ${this.countSpace()}; Keturkampio perimentras: ${this.countPerimeter()};`;
    }
};


let secondSquare = {
    length : 1,
    width : 2,
    countSpace() {
        return this.length * this.width;
    },
    countPerimeter() {
        return this.countSpace() * 2;
    },
    outputAllParameters(){
        return `Keturkampio plotas: ${this.countSpace()}; Keturkampio perimentras: ${this.countPerimeter()};`;
       }
};

let thirdSquare = {
    length : 1,
    width : 2,
    countSpace() {
        return this.length * this.width;
    },
    countPerimeter() {
        return this.countSpace() * 2;
    },
    outputAllParameters(){
        return `Keturkampio plotas: ${this.countSpace()}; Keturkampio perimentras: ${this.countPerimeter()};`;
       }
};

let dataToOutput = `${firstSquare.outputAllParameters()}, ${secondSquare.outputAllParameters()}, ${thirdSquare.outputAllParameters()}`;
console.log(dataToOutput);

// 5. Antram keturkampiui pridėti spalvą. +

secondSquare.color = 'red';

  // 6. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.

  secondSquare.halfPlot = function(){
    return this.countSpace() / 2;
  }

  // 7. Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y".

  thirdSquare.outputParametersLengthWidth = function(){
    return `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.length}`;
  }

  // 8. Į konsolę išvesti šiuos naujus duomenis.
console.log(thirdSquare.outputParametersLengthWidth());

  // 9. Visų keturkampių objektuose sukurti funkciją, kuri į html išveda tekstą apie keturkampių informaciją:
  //    „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."

  secondSquare.outputParametersLengthWidth = function(){
    return `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.length}`;
  }

  firstSquare.outputParametersLengthWidth = function(){
    return `Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.length}`;
  }

let container = document.querySelector('.container');

let divFirst = document.createElement('div');
divFirst.textContent = firstSquare.outputAllParameters() + ' ' + firstSquare.outputParametersLengthWidth();

let divSecond = document.createElement('div');
divSecond.textContent = secondSquare.outputAllParameters() + ' ' + secondSquare.outputParametersLengthWidth();

let divThird = document.createElement('div');
divThird.textContent = thirdSquare.outputAllParameters() + ' ' + thirdSquare.outputParametersLengthWidth();

container.append(divFirst, divSecond, divThird);


