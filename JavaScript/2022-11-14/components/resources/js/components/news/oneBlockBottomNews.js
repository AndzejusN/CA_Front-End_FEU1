export default function oneBlockBottomNews() {


    let elementBlockNews = document.createElement('a');
    elementBlockNews.href = '#';
    elementBlockNews.classList.add('text-decoration', 'bottom-news-box');

    elementBlockNews.innerHTML =   `<div>
                                        <img class="image-bottom-news"
                                             src="https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg"
                                             alt="News photo">
                                    </div>
                                    <div>
                                        <p class="bottom-news-header upper-case">technologijų ritmu</p>
                                        <h4 class="bold-text black-text">Kaip po chaotiškų mokslo metų pandemijos apsuptyje
                                            padėti vaikams sugrįžti į klases?</h4>
                                        <p class="black-text">2021-09-01</p>
                                    </div>`;

    return elementBlockNews;
}