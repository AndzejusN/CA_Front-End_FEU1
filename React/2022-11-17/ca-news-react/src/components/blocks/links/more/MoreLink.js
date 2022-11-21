import './MoreLink.css';

const MoreLink = ({mainLink, linkText}) => {
    return (
        <a href={mainLink} className="more-info-link">
            <div className="more-info bold-text">
                <div>{linkText}</div>
                <div className="more-symbol">&#8827;</div>
            </div>
        </a>
    );
}

export default MoreLink;