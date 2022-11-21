import './PromoBanner.css';
import PromoImage from './testcon.png';

const PromoBannner = ({mainLink}) => {
    return (
        <a href="./#">
            <img className="promo-testcon" src={PromoImage}
                alt="Promo on-line registration TestCon Europe 2022" />
        </a>
    );
}

export default PromoBannner;