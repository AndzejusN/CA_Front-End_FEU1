import podcast from './podcast.js';

export default function podcasts() {

    let podcastWrapper = document.createElement('div');
    podcastWrapper.classList.add('podcasts-wrapper');

    podcastWrapper.innerHTML = `<h1>Podcastai ir radijo laidos</h1>`;
    
    podcastWrapper.append(podcast(), podcast(), podcast(), podcast());

    return podcastWrapper;
}