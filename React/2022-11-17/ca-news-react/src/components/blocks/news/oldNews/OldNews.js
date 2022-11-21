import './OldNews.css';

const OldNews = ({mainLink, imgLink, theme, bodyHeader, bodyDate}) => {

    return (
        <a href={mainLink} className="text-decoration bottom-news-box">
            <div>
                <img className="image-bottom-news"
                    src={imgLink}
                    alt="News" />
            </div>
            <div>
                <p className="bottom-news-header upper-case">{theme}</p>
                <h4 className="bold-text black-text">{bodyHeader}</h4>
                <p className="black-text">{bodyDate}</p>
            </div>
        </a>);
}

export default OldNews;