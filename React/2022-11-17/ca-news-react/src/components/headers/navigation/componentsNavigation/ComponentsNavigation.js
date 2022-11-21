import './ComponentsNavigation.css';

const ComponentsNavigation = ({ link, text, classAdd }) => {

    return (
        <a href={link} className={classAdd}>{text}</a> 
    );
}

export default ComponentsNavigation;