export default function root() {

let rootContainer = document.querySelector('.root');

rootContainer.innerHTML =  `<div class="background-header-container">
                            <div class="container">
                            </div>
                            </div>
                            <div class="background-main-container">
                            <div class="container">
                                <main class="main-part">
                                    <div class="main-content">
                                        <div class="news-wrapper">
                                            <h1>Naujienos</h1>
                                        </div>
                                    </div>
                                </main>
                            </div>
                            </div>
                            <a href="">
                            <img class="floating-image" src="img/site-contact-form-button.png" alt="Floating image">
                            </a>`;

                            return rootContainer;
}