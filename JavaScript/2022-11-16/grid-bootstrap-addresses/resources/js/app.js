import addresses from './components/leftSide/addresses.js';
import map from './components/rightSide/map.js';

let root = document.querySelector('.root');

let content = document.createElement('div');
content.classList.add('content-wrapper');

root.append(content);

let props =
{
    mainTitle: 'Find us',
    shopList: [{
        shopTitle: 'Parduotuve 1',
        contactPhone: '+370456464564',
        contactEmail: 'shop1@parduotuve.lt',
        contactAddress: 'Arsenalo g. 5, Vilnius 01143'
    },
    {
        shopTitle: 'Parduotuve 2',
        contactPhone: '+370456464564',
        contactEmail: 'shop2@parduotuve.lt',
        contactAddress: 'Arsenalo g. 5, Vilnius 01143'
    },
    {
        shopTitle: 'Parduotuve 3',
        contactPhone: '+370456464564',
        contactEmail: 'shop3@parduotuve.lt',
        contactAddress: 'Arsenalo g. 5, Vilnius 01143'
    },
    {
        shopTitle: 'Parduotuve 4',
        contactPhone: '+370456464564',
        contactEmail: 'shop4@parduotuve.lt',
        contactAddress: 'Arsenalo g. 5, Vilnius 01143'
    }
    ]
};

content.append(addresses(props), map());