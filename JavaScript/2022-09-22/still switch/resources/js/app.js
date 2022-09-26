let personAge = 20;

switch (true) {
    case (isNaN(personAge)):
        console.log('Ne skaičius');
        break;
    case (personAge < 0):
        console.log('Amžius turi būti teigiamas skaičius');
        break;
    case (personAge < 6):
        console.log('Į mokyklą neeina');
        break;
    case (personAge < 7):
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
        break;
    case (personAge < 10):
        console.log('Pradinės klasės mokinys');
        break;
    case (personAge < 11):
        console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
        break;
    case (personAge < 14):
        console.log('Pagrindinės klasės mokinys');
        break;
    case (personAge < 15):
        console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
        break;
    case (personAge < 18):
        console.log('Gimnazistas');
        break;
    case (personAge < 19):
        console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
        break;
    case (personAge < 120):
        console.log('Mokyklą baigė');
        break;
    case (personAge >= 120):
        console.log('Per senas mokyklai');
        break;
    default:
        console.log ('Klaida');
        break;
}