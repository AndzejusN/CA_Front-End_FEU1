import { Routes, Route } from 'react-router-dom';
import './App.css';

import SertikaLogo from './images/sertika.svg';
import FacebookLogo from './images/facebook.svg';
import LinkedinLogo from './images/linkedin.svg';
import InstagramLogo from './images/instagram.svg'

import LogoImg from './images/codeacademy-black.svg';
import CallButton from './components/headers/button/CallButton';
import Home from './pages/home/Home';
import Programs from './pages/programs/Programs';
import News from './pages/news/News';
import NavigationLinks from './components/headers/navigation/NavigationLinks';
import ComponentsNavigation from './components/headers/navigation/componentsNavigation/ComponentsNavigation';

import Logo from './components/headers/logo/Logo';

function App() {

  const linksFooter = [
    {
      'id': 1,
      'link': './#',
      'text': 'Studentams'
    },
    {
      'id': 2,
      'link': './#',
      'text': 'Jei galiu aš – gali ir tu!'
    },
    {
      'id': 3,
      'link': './#',
      'text': 'Verslui'
    },
    {
      'id': 4,
      'link': './#',
      'text': 'Programos'
    },
    {
      'id': 5,
      'link': './#',
      'text': 'Nemokamos Studijos'
    },
    {
      'id': 6,
      'link': './#',
      'text': 'UŽT kursai'
    },
    {
      'id': 7,
      'link': './#',
      'text': 'Programavimo kalbos'
    },
    {
      'id': 8,
      'link': './#',
      'text': 'Apie mus'
    },
    {
      'id': 9,
      'link': './#',
      'text': 'Naujienos'
    },
    {
      'id': 10,
      'link': './#',
      'text': 'Karjera – We are hiring!'
    },
    {
      'id': 11,
      'link': './#',
      'text': 'ES parama'
    },
    {
      'id': 12,
      'link': './#',
      'text': 'Kontaktai'
    }
  ];


  const linksHeader = [
    {
      'id': 1,
      'link': './studentams',
      'text': 'Studentams'
    },
    {
      'id': 2,
      'link': './verslui',
      'text': 'Verslui'
    },
    {
      'id': 3,
      'link': './programos',
      'text': 'Programos'
    },
    {
      'id': 4,
      'link': './apie',
      'text': 'Apie mus'
    },
    {
      'id': 5,
      'link': './naujienos',
      'text': 'Naujienos'
    },
    {
      'id': 6,
      'link': './testas',
      'text': 'IT testas'
    },
    {
      'id': 7,
      'link': './kontaktai',
      'text': 'Kontaktai'
    },
    {
      'id': 8,
      'link': './en',
      'text': 'EN'
    }
  ];

  return (
    <>
      <div className="background-header-container">
        <div className="container">
          <header className="main-header">
            <div className="main-header-content-wrapper">
              <div className="logo-wrapper">
                <Logo
                  svgPicture={LogoImg}
                  altText='CodeAcademy Black Logo'
                />
              </div>
              <nav className="main-navigation">
                <NavigationLinks
                  data={linksHeader}
                />
                <CallButton
                  phone='+37066366555'
                  text='Skambinti'
                />
              </nav>
            </div>
          </header>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programos" element={<Programs />} />
        <Route path="/naujienos" element={<News />} />
      </Routes>

      <div className="background-footer-container">
        <div className="container">
          <footer className="footer-wrapper">
            <div className="image-logo-wrapper">
              <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg"
                alt="Code academy logo" />
            </div>
            <div className="footer-menu">
              <div className="menu-list">
                <NavigationLinks
                  data={linksFooter}
                />
              </div>
              <div className="addresses-list">
                <h3 className="city">vilnius</h3>
                <address>
                  < ComponentsNavigation
                    link='https://goo.gl/maps/r1zZZJFZaWfNysMW9'
                    text='Saulėtekio al. 15, Vilnius'
                    classAdd='address'
                  />
                  <a href="https://goo.gl/maps/r1zZZJFZaWfNysMW9" className="address">Saulėtekio al.
                    15, Vilnius</a>
                </address>
                <address>
                  <a href="https://goo.gl/maps/sCJpWcy62QygDGVd7" className="address">Antakalnio g.
                    17, Vilnius</a>
                </address>
              </div>
              <div className="social-media">
                <div className="instagram-logo">
                  <Logo
                    svgPicture={InstagramLogo}
                    altText='Instagram Logo'
                  />

                </div>
                <div className="facebook-logo">

                  <Logo
                    svgPicture={FacebookLogo}
                    altText='Facebook Logo'
                  />

                </div>
                <div className="linkedin-logo">
                  <Logo
                    svgPicture={LinkedinLogo}
                    altText='LinkedIn Logo'
                  />
                </div>
              </div>
              <div className="ca-kids">
                <span>© By UAB Programuok | CodeAcademy šeimos narys – </span>
                <a href="./#">CodeAcademy Kids</a>
                <img src={SertikaLogo} alt="Logo Sertika company" />
              </div>
              <div className="private-policy">
                <a href="./#">Privatumo politika</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;