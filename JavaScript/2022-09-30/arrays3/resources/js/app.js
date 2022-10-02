let arrNumbers = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];
// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
let arrNumOutput31  = arrNumbers.filter(value => value > 0);
console.log(arrNumOutput31);

// 3.2. Gauti tik neigiamus skaičius.
let arrNumOutput32  = arrNumbers.filter(value => value < 0);
console.log(arrNumOutput32);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let arrNumOutput33  = arrNumbers.filter(value => value % 2 === 0);
console.log(arrNumOutput33);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let arrNumOutput34  = arrNumbers.filter(value => value % 3 === 0);
console.log(arrNumOutput34);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let arrNumOutput35  = arrNumbers.filter(value => value % 5 === 0);
console.log(arrNumOutput35);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let arrNumOutput36  = arrNumbers.filter(value => value % 11 === 0);
console.log(arrNumOutput36);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let arrNumOutput37  = arrNumbers.filter(value => value % 31 === 0);
console.log(arrNumOutput37);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let arrNumOutput38  = arrNumbers.filter(value => value % 2 === 0 && value % 3 === 0);
console.log(arrNumOutput38);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let arrNumOutput39  = arrNumbers.filter(value => value % 3 === 0 && value % 7 === 0);
console.log(arrNumOutput39);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let arrNumOutput310  = arrNumbers.filter(value => value % 5 === 0 && value % 5 === 0);
console.log(arrNumOutput310);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let arrNumOutput311  = arrNumbers.filter(value => value % 5 === 0 && value % 11 === 0);
console.log(arrNumOutput311);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let arrNumOutput312  = arrNumbers.filter(value => value % 2 === 0 && value % 8 === 0 && value % 12 === 0);
console.log(arrNumOutput312);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let arrNumOutput313  = arrNumbers.filter(value => value % 2 === 0 || value % 3 === 0);
console.log(arrNumOutput313);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let arrNumOutput314  = arrNumbers.filter(value => value % 3 === 0 || value % 5 === 0);
console.log(arrNumOutput314);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let arrNumOutput315  = arrNumbers.filter(value => value % 5 === 0 || value % 6 === 0);
console.log(arrNumOutput315);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let arrNumOutput316  = arrNumbers.filter(value => value % 7 === 0 || value % 8 === 0);
console.log(arrNumOutput316);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let arrNumOutput317  = arrNumbers.filter(value => value % 9 === 0 || value % 13 === 0);
console.log(arrNumOutput317);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let arrNumOutput318  = arrNumbers.filter(value => value % 2 === 0 && value % 3 === 0 || value % 5 === 0);
console.log(arrNumOutput318);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let arrNumOutput319  = arrNumbers.filter(value => value % 5 === 0 && value % 7 === 0 || value % 9 === 0);
console.log(arrNumOutput319);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let arrNumOutput320  = arrNumbers.filter(value => value % 7 === 0 && value % 8 === 0 || value % 11 === 0);
console.log(arrNumOutput320);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let arrNumOutput321  = arrNumbers.filter(value => value % 9 === 0 && value % 12 === 0 || value % 13 === 0);
console.log(arrNumOutput321);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let arrNumOutput322  = arrNumbers.filter(value => value > 100);
console.log(arrNumOutput322);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let arrNumOutput323  = arrNumbers.filter(value => value > 555);
console.log(arrNumOutput323);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let arrNumOutput324  = arrNumbers.filter(value => value >= 888);
console.log(arrNumOutput324);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let arrNumOutput325  = arrNumbers.filter(value => value >= 6798);
console.log(arrNumOutput325);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let arrNumOutput326  = arrNumbers.filter(value => value < 50);
console.log(arrNumOutput326);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let arrNumOutput327  = arrNumbers.filter(value => value < 1000);
console.log(arrNumOutput327);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let arrNumOutput328  = arrNumbers.filter(value => value <= -1);
console.log(arrNumOutput328);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let arrNumOutput329  = arrNumbers.filter(value => value <= -5564);
console.log(arrNumOutput329);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let arrNumOutput330  = arrNumbers.filter(value => value < 1000 && value > 500);
console.log(arrNumOutput330);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let arrNumOutput331  = arrNumbers.filter(value => value < 100 && value > 0);
console.log(arrNumOutput331);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let arrNumOutput332  = arrNumbers.filter(value => value < 0 && value > -50);
console.log(arrNumOutput332);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let arrNumOutput333  = arrNumbers.filter(value => value <= 0 && value > -100);
console.log(arrNumOutput333);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let arrNumOutput334  = arrNumbers.filter(value => value >= 0 && value < 55);
console.log(arrNumOutput334);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let arrNumOutput335  = arrNumbers.filter(value => value >= 444 && value < 654);
console.log(arrNumOutput335);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let arrNumOutput336  = arrNumbers.filter(value => value > 0 && value % 2 === 0);
console.log(arrNumOutput336);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let arrNumOutput337  = arrNumbers.filter(value => value > 0 && value % 3 === 0);
console.log(arrNumOutput337);

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let arrNumOutput338  = arrNumbers.filter(value => value < 0 && value % 4 === 0);
console.log(arrNumOutput338);

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let arrNumOutput339  = arrNumbers.filter(value => value < 0 && value % 111 === 0);
console.log(arrNumOutput339);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let arrNumOutput340  = arrNumbers.filter(value => value > 500 && value % 2 === 0);
console.log(arrNumOutput340);

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let arrNumOutput341  = arrNumbers.filter(value => value > 1000 && value % 3 === 0);
console.log(arrNumOutput341);

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let arrNumOutput342  = arrNumbers.filter(value => value < 1000 && value % 9 === 0);
console.log(arrNumOutput342);

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let arrNumOutput343  = arrNumbers.filter(value => value < 500 && value % 2 === 0);
console.log(arrNumOutput343);

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let arrNumOutput344  = arrNumbers.filter(value => value >= 33 && value % 3 === 0);
console.log(arrNumOutput344);

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let arrNumOutput345  = arrNumbers.filter(value => value >= 444 && value % 12 === 0);
console.log(arrNumOutput345);

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let arrNumOutput346  = arrNumbers.filter(value => value <= 155 && value % 5 === 0);
console.log(arrNumOutput346);

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let arrNumOutput347  = arrNumbers.filter(value => value <= -333 && value % 9 === 0);
console.log(arrNumOutput347);

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let arrNumOutput348  = arrNumbers.filter(value => value > 100 && value < 500 && value % 5 === 0);
console.log(arrNumOutput348);

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let arrNumOutput349  = arrNumbers.filter(value => value >= 888 && value < 1000 && value % 2 === 0);
console.log(arrNumOutput349);

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let arrNumOutput350  = arrNumbers.filter(value => value <= 888 && value >= -333 && value % 3 === 0 && value !== 0);
console.log(arrNumOutput350);

// 3.51. Gauti tik skaičius.
let arrNumOutput351 = arrNumbers.filter(value => !isNaN(value));
console.log(arrNumOutput351);

// 3.52. Gauti tik tekstus (string).
let arrNumOutput352 = arrNumbers.filter(value => typeof (value) === 'string');
console.log(arrNumOutput352);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let arrNumOutput353 = arrNumbers.filter(value => typeof (value) === 'string' && value.length > 5);
console.log(arrNumOutput353);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let arrNumOutput354 = arrNumbers.filter(value => typeof (value) === 'string' && value.length <= 5);
console.log(arrNumOutput354);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let arrNumOutput355 = arrNumbers.filter(value => typeof (value) === 'string' && value.length <= 5);
console.log(arrNumOutput355);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let arrNumOutput356 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('t'));
console.log(arrNumOutput356);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let arrNumOutput357 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('y'));
console.log(arrNumOutput357);

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let arrNumOutput358 = arrNumbers.filter(value => typeof (value) === 'string' && (value.includes('e') || value.includes('a')));
console.log(arrNumOutput358);

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let arrNumOutput359 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('t') && value.includes('i'));
console.log(arrNumOutput359);

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let arrNumOutput360 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('t') && !value.includes('k'));
console.log(arrNumOutput360);

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let arrNumOutput361 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('a') && !value.includes('s'));
console.log(arrNumOutput361);

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let arrNumOutput362 = arrNumbers.filter(value => typeof (value) === 'string' && (value.match(/t/g) || []).length > 1);
console.log(arrNumOutput362);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let arrNumOutput363 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('st'));
console.log(arrNumOutput363);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let arrNumOutput364 = arrNumbers.filter(value => typeof (value) === 'string' && value.includes('nd'));
console.log(arrNumOutput364);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let arrNumOutput365 = arrNumbers.filter(value => typeof (value) === 'string' && !value.includes('s'));
console.log(arrNumOutput365);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let arrNumOutput366 = arrNumbers.filter(value => typeof (value) === 'string' && !value.includes('t'));
console.log(arrNumOutput366);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let arrNumOutput367 = arrNumbers.filter(value => typeof (value) === 'string' && !value.includes('r') && !value.includes('l'));
console.log(arrNumOutput367);

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let arrNumOutput368 = arrNumbers.filter(value => typeof (value) === 'string' && !isNaN(value[0]));
console.log(arrNumOutput368);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let arrNumOutput369 = arrNumbers.filter(value => typeof (value) === 'string' && value[0].includes('s'));
console.log(arrNumOutput369);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let arrNumOutput370 = arrNumbers.filter(value => typeof (value) === 'string' && value[0].includes('o'));
console.log(arrNumOutput370);

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let arrNumOutput3700 = arrNumbers.filter(value => typeof (value) === 'string' && value[value.length - 1].includes('d'));
console.log(arrNumOutput3700);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let arrNumOutput371 = arrNumbers.filter(value => typeof (value) === 'string' && value[value.length - 1].includes('s'));
console.log(arrNumOutput371);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let arrNumOutput372 = arrNumbers.filter(value => typeof (value) === 'string' && value.length > 4 && value.includes('o'));
console.log(arrNumOutput372);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let arrNumOutput373 = arrNumbers.filter(value => typeof (value) === 'string' && value.length >= 5 && value.includes('a'));
console.log(arrNumOutput373);

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let arrNumOutput374 = arrNumbers.filter(value => typeof (value) === 'string' && value.length >= 5 && value.includes('a'));
console.log(arrNumOutput374);

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let arrNumOutput375 = arrNumbers.filter(value => typeof (value) === 'string' && value.length % 2);
console.log(arrNumOutput375);

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let arrNumOutput376 = arrNumbers.filter(value => typeof (value) === 'string' && value.length % 2 !== 0 && value.includes('s'));
console.log(arrNumOutput376);

// 3.77. Gauti tik tekstus (string), kurių trečia simbolis yra a.
let arrNumOutput377 = arrNumbers.filter(value => typeof (value) === 'string' && value[2].includes('a'));
console.log(arrNumOutput377);

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let arrNumOutput378 = arrNumbers.filter(value => typeof (value) === 'string' && value[2] === 'l');
console.log(arrNumOutput378);

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let arrNumOutput379 = arrNumbers.filter(value => typeof (value) === 'string' && value[4] !== 't' && (value.length > 4));
console.log(arrNumOutput379);

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let arrNumOutput380 = arrNumbers.filter(value => typeof (value) === 'string' && value[0] !== 'e' && (value.length < 6));
console.log(arrNumOutput380);

