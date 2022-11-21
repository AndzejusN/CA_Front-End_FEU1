import './Podcast.css';
import play from './play.jpg';

const Podcast = ({imgLink, theme, trackLink, bodyHeader, bodyDate}) => {
return (
    <div className="podcast">
    <div className="podcast-track">
      <img src={imgLink} className="image-podcast" alt="Man" />
      <p className="track-long">{theme}</p>
      <a className="track-link" href={trackLink}><img className="track-play" src={play} alt="Play button" /></a>
    </div>
    <div className="podcast-text">
      <p className="bold-text">{bodyHeader}</p>
      <p>{bodyDate}</p>
    </div>
  </div>
)} 

export default Podcast;
