export default function podcast() {

let podcastWrapper = document.createElement('div');
podcastWrapper.classList.add('podcasts-wrapper');

podcastWrapper.innerHTML = `<h1>Podcastai ir radijo laidos</h1>
                            <div class="podcast">
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
                            </div>
                            <div class="podcast">
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
                                </div>
                                <div class="podcast">
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
                                            </div>
                                            <div class="podcast">
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
                                </div>
                                <h1>Renginiai</h1>
                                    <a href="#">
                                        <img class="promo-testcon" src="img/testcon.png"
                                             alt="Promo on-line registration TestCon Europe 2022">
                                    </a>
                                    <div class="event">
                                        <a class="text-decoration" href="#">
                                            <div class="promo-text black white-text">
                                                <div class="promo-date">
                                                    <div class="promo-number white black-text"><h2>26</h2></div>
                                                    <div class="promo-month pink"><h4>SPA</h4></div>
                                                </div>
                                                <p class="upper-case">online</p>
                                                <h2>TestCon Europe 2022</h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="event">
                                        <a class="text-decoration" href="#">
                                            <div class="promo-text black white-text">
                                                <div class="promo-date">
                                                    <div class="promo-number white black-text"><h2>26</h2></div>
                                                    <div class="promo-month pink"><h4>SPA</h4></div>
                                                </div>
                                                <p class="upper-case">online</p>
                                                <h2>TestCon Europe 2022</h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="event">
                                        <a class="text-decoration" href="#">
                                            <div class="promo-text black white-text">
                                                <div class="promo-date">
                                                    <div class="promo-number white black-text"><h2>26</h2></div>
                                                    <div class="promo-month pink"><h4>SPA</h4></div>
                                                </div>
                                                <p class="upper-case">online</p>
                                                <h2>TestCon Europe 2022</h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="event">
                                        <a class="text-decoration" href="#">
                                            <div class="promo-text black white-text">
                                                <div class="promo-date">
                                                    <div class="promo-number white black-text"><h2>26</h2></div>
                                                    <div class="promo-month pink"><h4>SPA</h4></div>
                                                </div>
                                                <p class="upper-case">online</p>
                                                <h2>TestCon Europe 2022</h2>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="more-info bold-text">
                                        <div>Daugiau</div>
                                        <div class="more-symbol">></div>
                                    </div>`;

                                return podcastWrapper;
}