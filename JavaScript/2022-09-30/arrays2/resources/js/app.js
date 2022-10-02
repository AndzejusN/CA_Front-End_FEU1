let arrNumbers = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
let arrNumbers21 = arrNumbers.slice(0,1);
console.log(arrNumbers21);

// 2.2. Gauti paskutinį masyvo narį.
let arrNumbers22 = arrNumbers.slice(-1);
console.log(arrNumbers22);

// 2.3. Gauti antrą masyvo narį.
let arrNumbers23 = arrNumbers.slice(1,2);
console.log(arrNumbers23);

// 2.4. Gauti priešpaskutinį masyvo narį.
let arrNumbers24 = arrNumbers.slice(-2,-1);
console.log(arrNumbers24);

// 2.5. Gauti aštuntą masyvo narį.
let arrNumbers25 = arrNumbers.slice(7,8);
console.log(arrNumbers25);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let arrNumbers26 = arrNumbers.slice(-9,-8);
console.log(arrNumbers26);

// 2.7. Gauti vidurinį masyvo narį.
let middleNr = Math.floor(arrNumbers.length/2);
let arrNumbers27 = arrNumbers.slice(middleNr, middleNr+1);
console.log(arrNumbers27);

// 2.8. Gauti pirmus tris masyvo narius.
let arrNumbers28 = arrNumbers.slice(0,3);
console.log(arrNumbers28);

// 2.9. Gauti paskutinius tris masyvo narius.
let arrNumbers29 = arrNumbers.slice(-3);
console.log(arrNumbers29);

// 2.10. Gauti pirmus 10 masyvo narius.
let arrNumbers210 = arrNumbers.slice(-3);
console.log(arrNumbers210);

// 2.11. Gauti paskutinius 10 masyvo narius.
let arrNumbers211 = arrNumbers.slice(-10);
console.log(arrNumbers211);

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let arrNumbers212 = arrNumbers.slice(2,8);
console.log(arrNumbers212);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let arrNumbers213 = arrNumbers.slice(4,9);
console.log(arrNumbers213);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let arrNumbers214 = arrNumbers.slice(10,19);
console.log(arrNumbers214);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let arrNumbers215 = arrNumbers.slice(8,17);
console.log(arrNumbers215);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let arrNumbers216 = arrNumbers.slice(1);
console.log(arrNumbers216);

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let arrNumbers217 = arrNumbers.slice(0,-1);
console.log(arrNumbers217);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let arrNumbers218 = arrNumbers.slice(5);
console.log(arrNumbers218);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let arrNumbers219 = arrNumbers.slice(0,-5);
console.log(arrNumbers219);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let arrLengthMiddle =  Math.floor(arrNumbers.length / 2);
let arrNumbers220 = arrNumbers.slice(0,arrLengthMiddle);
console.log(arrNumbers220);

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let arrNumbers221 = arrNumbers.slice(arrLengthMiddle+1);
console.log(arrNumbers221);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let arrNumbers222 = arrNumbers.slice(1,-1);
console.log(arrNumbers222);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let arrNumbers223 = arrNumbers.slice(5,-3);
console.log(arrNumbers223);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let arrNumbers224 = arrNumbers.slice(1,-8);
console.log(arrNumbers224);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let arrNumbers225 = arrNumbers.slice(7,-1);
console.log(arrNumbers225);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let arrNumbers226 = arrNumbers.slice(9,-12);
console.log(arrNumbers226);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let arrNumbers227 = arrNumbers.slice(10, 19);
console.log(arrNumbers227);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let arrNumbers228 = arrNumbers.slice(7, 19);
console.log(arrNumbers228);

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let arr1 = arrNumbers.slice(0,5);
let arr2 = arrNumbers.slice(-6);
let arrNumbers229 = [];
arrNumbers229 = arrNumbers229.concat(arr1,arr2);
console.log(arrNumbers229);

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let arr11 = arrNumbers.slice(2, 5);
let arr22 = arrNumbers.slice(14,17);
let arrNumbers230 = [];
arrNumbers230 = arrNumbers230.concat(arr11,arr22);
console.log(arrNumbers230);