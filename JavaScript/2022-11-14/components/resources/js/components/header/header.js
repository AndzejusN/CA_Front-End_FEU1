export default function header() {
    let header = document.createElement('header');
    header.classList.add('main-header');

    header.innerHTML = `<div class="main-header-content-wrapper">
                        <div class="logo-wrapper">
                            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                                 alt="CodeAcademy Black Logo">
                        </div>
                        <nav class="main-navigation">
                            <ul class="main-menu">
                                <li class="menu-item"><a href="#">Studentams</a></li>
                                <li class="menu-item"><a href="#">Verslui</a></li>
                                <li class="menu-item"><a href="#">Programos</a></li>
                                <li class="menu-item"><a href="#">Apie mus</a></li>
                                <li class="menu-item"><a href="#">Naujienos</a></li>
                                <li class="menu-item"><a href="#">IT testas</a></li>
                                <li class="menu-item"><a href="#">Kontaktai</a></li>
                                <li class="menu-item"><a href="#">EN</a></li>
                            </ul>
                            <a href="tel:+37066366555" class="button">Skambinti</a>
                        </nav>
                    </div>`;

    return header;
}