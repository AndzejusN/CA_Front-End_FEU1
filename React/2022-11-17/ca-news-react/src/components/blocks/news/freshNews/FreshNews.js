import './FreshNews.css';

const FreshNews = ({mainLink, imgLink, theme, bodyHeader, bodyDate}) => {
    return (
        <a href={mainLink} className="text-decoration white">
            <div><img className="image-top-news"
                src={imgLink}
                alt="News" />
            </div>
            <div className="top-news-text">
                <p className="upper-case">{theme}</p>
                <h2 className="bold-text black-text">{bodyHeader}</h2>
                <p className="black-text">{bodyDate}</p>
            </div>
        </a>
    )
}

export default FreshNews;