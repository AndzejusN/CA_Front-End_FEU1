import './Logo.css';

const Logo = ({ svgPicture, altText }) => {
    return (
        <img src={svgPicture}
            alt={altText}
        />
    )
}

export default Logo;