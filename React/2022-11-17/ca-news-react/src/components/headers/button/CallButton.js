import './CallButton.css';

const CallButton = ({phone, text}) => {

    let linkPhone = 'tel:' + phone;

    return (
        <a href={linkPhone} className="button">{text}</a>
    )
}

export default CallButton;