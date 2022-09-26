// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti du argumentus (ilgį ir plotį).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.
//     Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
//     Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.

function squarePlot(long, width, units = 'm') {
    let result = long * width;
    return 'Stačiakampio plotas yra: ' + result + ' kv.' + units;
}

console.log(squarePlot(10, 10));

function rightTrianglePlot(lenghtOne, lenghtTwo, units = 'm') {
    let result = lenghtOne * lenghtTwo / 2;
    return 'Stačiojo trikampio plotas yra: ' + result + ' kv.' + units;
}

console.log(rightTrianglePlot(10, 10));

function viewBothResults(firstParameter, secondParameter, units = 'm') {
    let resultSquare = squarePlot(firstParameter, secondParameter, units);
    let resultRightTriangle = rightTrianglePlot(firstParameter, secondParameter, units);
    return resultSquare + '\n' + resultRightTriangle;
}

console.log(viewBothResults(10, 10));