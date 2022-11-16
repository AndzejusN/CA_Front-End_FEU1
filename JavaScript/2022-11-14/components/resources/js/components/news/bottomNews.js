import oneBlockBottomNews from './oneBlockBottomNews.js';

export default function BottomNews() {

    let bottomNews = document.createElement('div');
    bottomNews.classList.add('bottom-news');

    bottomNews.append(oneBlockBottomNews(), oneBlockBottomNews(), oneBlockBottomNews(), oneBlockBottomNews());

    return bottomNews;
}