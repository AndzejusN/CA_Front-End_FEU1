import root from './root';
import header from './components/header/header.js';
import topNews from './components/news/topNews.js';
import bottomNews from './components/news/bottomNews.js';
import podcast from './components/podcast/podcast.js';

root();

let containerHeader = document.querySelector('.background-header-container .container');
let headerResponse = header();
containerHeader.append(headerResponse);

let newsWrapper = document.querySelector('.background-main-container .container .main-part .main-content .news-wrapper');
let topNewsResponse = topNews();
let bottomNewsResponse = bottomNews();
newsWrapper.append(topNewsResponse, bottomNewsResponse);

let mainContent = document.querySelector('.background-main-container .container .main-part .main-content');
let podcastResponse = podcast();

mainContent.append(podcastResponse);

