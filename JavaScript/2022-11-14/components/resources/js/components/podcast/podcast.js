export default function podcast() {

    let podcast = document.createElement('div');
    podcast.classList.add('podcast');

    podcast.innerHTML = `<div class="podcast">
                            <div class="podcast-track">
                                <img src="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png"
                                     class="image-podcast" alt="Man on photo">
                                <p class="track-long">Trukmė: 7:55</p>
                                <a class="track-link" href="#"><img class="track-play" src="img/play.jpg" alt="Play button"></a>
                            </div>
                            <div class="podcast-text">
                                <p class="bold-text">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</p>
                                <p>2021-09-02</p>
                            </div>
                        </div>`;
    return podcast;
}