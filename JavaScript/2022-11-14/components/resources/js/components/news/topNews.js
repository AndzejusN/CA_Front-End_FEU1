import oneBlockTopNews from './oneBlockTopNews.js';

export default function topNews() {

let topNews = document.createElement('div');
topNews.classList.add('top-news');

let h1 = document.createElement('h1');
h1.textContent = 'Naujienos';
h1.style.gridColumn = '1 / 3';
h1.style.gridRow = '1';

topNews.append(h1, oneBlockTopNews(), oneBlockTopNews(), oneBlockTopNews(), oneBlockTopNews());

return topNews;
}