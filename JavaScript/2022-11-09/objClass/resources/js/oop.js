import { Animal } from './Classes/Animal.js';
import { Mammal } from './Classes/Mammal/Mammal.js';
import { Bird } from './Classes/Bird/Bird.js';
import { Parrot } from './Classes/Bird/Parrot/Parrot.js';
import { Vulture } from './Classes/Bird/Vulture/Vulture.js';
import { Dog } from './Classes/Mammal/Dog/Dog.js';
import { Cat } from './Classes/Mammal/Cat/Cat.js';

  let firstAnimal = new Animal(2, 'blue', 'some', 'forSure');
  firstAnimal.renderText('First animal first text', 'h2');

  let firstCat = new  Cat(3, 'black', 'cat', true, true, false, false);
  firstCat.renderText(firstCat.makeSounds(), 'h1');

  let animal = new Animal (2, 'blue', 'some', 'forSure');

  animal.getProperties();

  