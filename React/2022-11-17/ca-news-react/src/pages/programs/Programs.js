import './Programs.css';

const Programs = () => {
    return (
        <div class="background-main-container">
            <div class="container">
                <div class="top-info-wrapper">
                    <h1 class="main-theme">Programos</h1>
                    <a href="./#">
                        <div class="test-link">
                            <div class="text"><span class="slogan">Nežinai ką pasirinkti? </span><span>Spręsk IT testą</span>
                            </div>
                            <div class="picture"><img src="img/picture-test.png" alt="Test link picture" /></div>
                            <div class="symbol"><span>&#8827;</span></div>
                        </div>
                    </a>
                </div>
                <main class="main-part">
                    <div class="filter">
                        <h2>Rastos 31 programos</h2>
                        <form action="#" method="POST">
                            <div class="theme">
                                <label for="theme">Tema</label>
                                <select name="theme" id="theme">
                                    <option value="visos" selected="selected">visos</option>
                                    <option value="testavimas">testavimas</option>
                                    <option value="programavimas">programavimas</option>
                                    <option value="dizainas">dizainas</option>
                                    <option value="duomenys">duomenys</option>
                                    <option value="rinkodara">rinkodara</option>
                                </select>
                            </div>
                            <div class="place">
                                <label for="place">Vieta</label>
                                <select name="place" id="place">
                                    <option value="visos" selected="selected">visos</option>
                                    <option value="online">online</option>
                                    <option value="vilnius">vilnius</option>
                                    <option value="kaunas">kaunas</option>
                                    <option value="klaipeda">klaipėda</option>
                                </select>
                            </div>
                            <div class="type">
                                <label for="type">Tipas</label>
                                <select name="type" id="type">
                                    <option value="visi" selected="selected">visi</option>
                                    <option value="starter">pradedančių kursai</option>
                                    <option value="pro">pažengusių studijos</option>
                                    <option value="level">1+2 lygis</option>
                                    <option value="one">studijos 101</option>
                                    <option value="uzt">finansuojama užt</option>
                                    <option value="free">nemokamos studijos</option>
                                </select>
                            </div>
                            <div class="time">
                                <span class="time-text">Laikas</span>
                                <div class="time-input">
                                    <label for="day"></label>
                                    <input type="checkbox" id="day" />
                                    <span>Dienomis</span>
                                </div>
                                <div class="time-input">
                                    <label for="evening"></label>
                                    <input type="checkbox" id="evening" />
                                    <span>Vakarais</span>
                                </div>
                            </div>
                            <button type="reset">išvalyti</button>
                        </form>
                    </div>

                    <div class="main-content">
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="../../images/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                        Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="img/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="../../images/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="img/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="img/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="img/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="img/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="content-top-wrapper">
                                <div class="type">
                                    <span>nemokama</span>
                                </div>
                                <div class="image-wrapper">
                                    <img class="image-type" src="../../images/type_img.svg" alt="Symbol of program type" />
                                </div>
                                <div class="header">
                                    <h1>Front-end Serverless (223002583)</h1>
                                </div>
                                <div class="information">
                                    <span>Front-end – apima viską, ką mato vartotojas. Taip pat paliečiamos ir projekto valdymo technologijos, kurios reikalingos kiekvienoje IT įmonėje.
                                    </span>
                                </div>
                            </div>
                            <div class="content-bottom-wrapper">
                                <div class="type-time">
                                    <div class="type-image">
                                        <img src="../../images/lygis.png" alt="level 1+2 picture" />
                                    </div>
                                    <div class="time-image">
                                        <img src="../../images/dienomis.png" alt="day time picture" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Programs;