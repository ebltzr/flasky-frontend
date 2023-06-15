// import logo from './logo.svg';
import './App.css';

import AnimalList from './components/AnimalList';

const listOfAnimals = [
  {
      id: 100,
      name: "Violet",
      species: "pitbull mix"
  },
  {
      id: 101,
      name: "Norman",
      species: "Pyrenees puppy"
  },
  {
      id: 102,
      name: "Juni",
      species: "Poodle",
      photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg"
  },
  {
      id: 103,
      name: "Sabine",
      species: "Dog"
  }
];


function App() {
  // Comments outside of JSX (but still in js that is not "returned") can still be //'s
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency </h1>
      {/* <h2>Animal Listings</h2> */}
      <AnimalList listOfAnimals={ listOfAnimals }></AnimalList>
      {/* <AnimalList></AnimalList> */}
    </section>
  );
}

export default App;
