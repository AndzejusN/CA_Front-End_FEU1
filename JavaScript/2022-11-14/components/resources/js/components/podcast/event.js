export default function event(props) {

        let event = document.createElement('div');
        event.classList.add('event');

        event.innerHTML = ` <a class="text-decoration" href="${props.linkHref}">
                                <div class="promo-text black white-text">
                                    <div class="promo-date">
                                        <div class="promo-number white black-text"><h2>${props.day}</h2></div>
                                        <div class="promo-month pink"><h4>${props.month}</h4></div>
                                    </div>
                                    <p class="upper-case">${props.state}</p>
                                    <h2>${props.eventName}</h2>
                                </div>
                            </a>`;

    return event;
}