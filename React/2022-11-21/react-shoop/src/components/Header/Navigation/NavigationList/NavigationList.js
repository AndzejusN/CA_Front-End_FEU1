import { Link } from 'react-router-dom';

import './NavigationList.css';

const NavigationList = ({ data }) => {

    const listItems = data.map((element, index) =>
        <li key={index} className="menu-item"><Link to={element.link}>{element.text}</Link></li>
    );

    return (
        <ul className="main-menu">
            {listItems}
        </ul>
    );

}

export default NavigationList;