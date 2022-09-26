function fizzBuzzEct() {
    for (let i = 1; i < 150; i++) {
        let result = '';

        if (i % 3 === 0) {
            result += 'Fizz';
        }
        if (i % 5 === 0) {
            result += ' Buzz';
        }
        if (i % 7 === 0) {
            result += ' Biff';
        }
        if (i % 9 === 0) {
            result += ' Fuzz';
        }
        if (i % 11 === 0) {
            result += ' Kazkoks';
        }
        if (!result) {
            result = i;
        }
        console.log(result);
    }
}

fizzBuzzEct();

// i % 3 === 0 && (result += 'Fizz');
// i % 5 === 0 && (result += 'Buzz');
// ...