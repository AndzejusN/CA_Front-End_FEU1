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
                                        </div>
                                        <div class="podcast-event-wrapper">
                                        </div>
                                    </div>
                                </main>
                            </div>
                            </div>`;

                            return rootContainer;
}