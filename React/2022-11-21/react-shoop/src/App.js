// 1. Naudojant create-react-app sukurti naują projektą pavadinimu „react-learning". +
// 2. Naudojant react-router-dom sukurti du routes (puslapius): Home ir Shopping List. +
// 2.1. Sukurti navigacijos komponentą, kuriame yra nuorodos, nukreipiančios į šiuos du puslapius (naudoti Link komponentą iš react-router-dom). +
// 3. ShoppingList komponente sukurti masyvą su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:
// 3.1 title (string tipo)
// 3.2. done (boolean tipo)
// 4.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."
// 4.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą jam paduodant informaciją per props.

import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import ShoppingList from './pages/ShoppingList/ShoppingList';
import NavigationList from './components/Header/Navigation/NavigationList/NavigationList';

function App() {

  const linksHeader = [
    {
      'link': '/',
      'text': 'Home'
    },
    {
      'link': '/shopping-list',
      'text': 'Shopping List'
    }
  ]

  return (
    <div className="App">
      <NavigationList data={linksHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;