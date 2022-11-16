import root from './root';
import header from './components/header/header.js';
import topNews from './components/news/topNews.js';
import bottomNews from './components/news/bottomNews.js';
import podcasts from './components/podcast/podcasts.js';
import events from './components/podcast/events.js';
import buttonMore from './components/buttons/buttonMore.js';
import apply from './components/floating/apply.js';

root();

let rootContainer = root();
rootContainer.append(apply());

let containerHeader = document.querySelector('.background-header-container .container');
let headerResponse = header();
containerHeader.append(headerResponse);

let newsWrapper = document.querySelector('.background-main-container .container .main-part .main-content .news-wrapper');
let topNewsResponse = topNews();
let bottomNewsResponse = bottomNews();
let buttonMoreNews = buttonMore('Visos naujienos');

newsWrapper.append(topNewsResponse, bottomNewsResponse, buttonMoreNews);

let podcastEventWrapper = document.querySelector('.background-main-container .container .main-part .main-content .podcast-event-wrapper');

podcastEventWrapper.append(podcasts(), events(), buttonMore('Daugiau'));