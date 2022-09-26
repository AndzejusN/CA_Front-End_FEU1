const Perimeter = require('./classes/Perimeter');
const Plot = require('./classes/Plot');

let perimeter = new Perimeter(100, 50);
let plot = new Plot(100, 50);

console.log(perimeter.viewRectangle());
console.log(plot.viewRectangle());

let perimeterTringle = new Perimeter(10, 5, 5);
let plotRightTriagle = new Plot(100, 50);

console.log(perimeterTringle.viewRightTriangle());
console.log(plotRightTriagle.viewRightTriangle());


function total() {
    return perimeterTringle.viewRightTriangle() + '\n' + plotRightTriagle.viewRightTriangle() + '\n' + perimeter.viewRectangle() + '\n' + plot.viewRectangle();
}

console.log(total());

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.
//     Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
//     Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.