import event from './event';
import promo from './promo.js';

export default function events() {

    let events = document.createElement('div');

    events.innerHTML = `<h1>Renginiai</h1>`;

    let props = [{
        linkHref: '#',
        day: 20,
        month: 'NOV',
        state: 'online',
        eventName: 'CodeAcademy Talents'
        },
        {
        linkHref: '#',
        day: 27,
        month: 'DEC',
        state: 'live',
        eventName: 'Intro: „Salesforce“ CRM'
        },
        {
        linkHref: '#',
        day: 5,
        month: 'JAN',
        state: 'live',
        eventName: 'Intro: Dirbtinis intelektas ir Duomenų mokslas'
        }
    ];

    events.append(promo());

    props.map( elem => {
        events.append(event(elem));
    }) 

    return events;
}