import './News.css';

import TopHOne from '../../components/titles/topTitle/TopHOne';
import FreshNews from '../../components/blocks/news/freshNews/FreshNews';
import OldNews from '../../components/blocks/news/oldNews/OldNews';
import Podcast from '../../components/blocks/podcasts/Podcast';
import Event from '../../components/blocks/event/Event';
import Apply from '../../components/floating/apply/Apply';
import MoreLink from '../../components/blocks/links/more/MoreLink';
import PromoBannner from '../../components/blocks/links/promo/PromoBanner';

function News() {

  return (
    <>
      <div className="background-main-container">
        <div className="container-main">
          <main className="main-part">
            <div className="main-content">
              <div className="news-wrapper">
                <TopHOne text='Naujienos' />
                <div className="top-news">
                  <FreshNews
                    mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg'
                    theme='naujienos'
                    bodyHeader='First - Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?'
                    bodyDate='2022-03-23' />

                  <FreshNews
                    mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg'
                    theme='naujienos'
                    bodyHeader='Second - Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?'
                    bodyDate='2022-03-23' />

                  <FreshNews
                    mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg'
                    theme='naujienos'
                    bodyHeader='Third - Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?'
                    bodyDate='2022-03-23' />

                  <FreshNews
                    mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg'
                    theme='naujienos'
                    bodyHeader='Fourth - Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?'
                    bodyDate='2022-03-23' />

                </div>
                <div className="bottom-news">
                  <OldNews mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg'
                    theme='technologijų ritmu'
                    bodyHeader='First - Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?'
                    bodyDate='2021-09-01' />

                  <OldNews mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg'
                    theme='technologijų ritmu'
                    bodyHeader='Second - Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?'
                    bodyDate='2021-09-01' />

                  <OldNews mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg'
                    theme='technologijų ritmu'
                    bodyHeader='Third - Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?'
                    bodyDate='2021-09-01' />

                  <OldNews mainLink='./#'
                    imgLink='https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg'
                    theme='technologijų ritmu'
                    bodyHeader='Fourth - Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?'
                    bodyDate='2021-09-01' />
                </div>

                < MoreLink
                  mainLink='./#'
                  linkText='Visos naujienos'
                />

              </div>
              <div className="podcasts-wrapper">
                <TopHOne text='Podcastai ir radijo laidos'></TopHOne>

                <Podcast
                  imgLink='https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png'
                  theme='Trukmė: 7:55'
                  trackLink='./#'
                  bodyHeader='First - Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
                  bodyDate='2021-09-02'
                />

                <Podcast
                  imgLink='https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png'
                  theme='Trukmė: 7:55'
                  trackLink='./#'
                  bodyHeader='Second - Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
                  bodyDate='2021-09-02'
                />

                <Podcast
                  imgLink='https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png'
                  theme='Trukmė: 7:55'
                  trackLink='./#'
                  bodyHeader='Third - Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
                  bodyDate='2021-09-02'
                />

                <Podcast
                  imgLink='https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png'
                  theme='Trukmė: 7:55'
                  trackLink='./#'
                  bodyHeader='Fourth - Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
                  bodyDate='2021-09-02'
                />

                <TopHOne text='Renginiai'></TopHOne>

                < PromoBannner mainLink='./#' />

                <Event mainLink='./#'
                  eventDay='26'
                  eventMonth='SPA'
                  eventStatus='online'
                  eventTheme='First - TestCon Europe 2022'
                />

                <Event mainLink='./#'
                  eventDay='26'
                  eventMonth='SPA'
                  eventStatus='online'
                  eventTheme='Second - TestCon Europe 2022'
                />

                <Event mainLink='./#'
                  eventDay='26'
                  eventMonth='SPA'
                  eventStatus='online'
                  eventTheme='Third - TestCon Europe 2022'
                />

                <Event mainLink='./#'
                  eventDay='26'
                  eventMonth='SPA'
                  eventStatus='online'
                  eventTheme='Fourth - TestCon Europe 2022'
                />

                < MoreLink
                  mainLink='./#'
                  linkText='Daugiau'
                />

              </div>
            </div>
          </main>
        </div>
      </div>

      <Apply />
    </>
  );
}

export default News;