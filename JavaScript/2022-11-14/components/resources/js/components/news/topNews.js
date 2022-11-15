export default function topNews() {

let topNews = document.createElement('div');
topNews.classList.add('top-news');

topNews.innerHTML = `   <a href="#" class="text-decoration white">
                        <div><img class="image-top-news"
                                  src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg"
                                  alt="News photo">
                        </div>
                        <div class="top-news-text">
                            <p class="upper-case">naujienos</p>
                            <h2 class="bold-text black-text">Dezinformacija ir kibernetinis pavojus: kaip
                                apsisaugoti?</h2>
                            <p class="black-text">2022-03-23</p>
                        </div>
                    </a>
                    <a href="#" class="text-decoration white">
                        <div><img class="image-top-news"
                                  src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg"
                                  alt="News photo">
                        </div>
                        <div class="top-news-text">
                            <p class="upper-case">naujienos</p>
                            <h2 class="bold-text black-text">Dezinformacija ir kibernetinis pavojus: kaip
                                apsisaugoti?</h2>
                            <p class="black-text">2022-03-23</p>
                        </div>
                    </a>`;

                    return topNews;
                }