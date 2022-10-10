let number = document.getElementById('number');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', (e) => {
    e.preventDefault();
    number.value++;
})

minus.addEventListener('click', (e) => {
    e.preventDefault();
    number.value--;
})

let form = document.getElementsByTagName('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
