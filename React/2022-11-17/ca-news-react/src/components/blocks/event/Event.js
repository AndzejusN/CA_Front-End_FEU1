import './Event.css';

const Event = ({mainLink, eventDay, eventMonth, eventStatus, eventTheme}) => {
    return (
        <div className="event">
        <a className="text-decoration" href={mainLink}>
          <div className="promo-text black white-text">
            <div className="promo-date">
              <div className="promo-number white black-text"><h2>{eventDay}</h2></div>
              <div className="promo-month pink"><h4>{eventMonth}</h4></div>
            </div>
            <p className="upper-case">{eventStatus}</p>
            <h2>{eventTheme}</h2>
          </div>
        </a>
      </div>
    )
}

export default Event;


