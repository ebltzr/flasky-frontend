import { useState, useEffect } from "react";
import './App.css';
import AnimalList from './components/AnimalList';
import axios from "axios";

// const INITIAL_ANIMALS = [
//   {
//     id: 100,
//     name: "Violet",
//     species: "pitbull mix",
//     isBookmarked: true,
//   },
//   {
//     id: 101,
//     name: "Norman",
//     species: "Pyrenees puppy",
//     isBookmarked: false,
//   },
//   {
//     id: 102,
//     name: "Juni",
//     species: "Poodle",
//     photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
//     isBookmarked: false,
//   },
//   {
//     id: 103,
//     name: "Sabine",
//     species: "Dog",
//     isBookmarked: false,
//   },
//   {
//     id: 104,
//     name: "Paprika and Braven",
//     species: "Kittens",
//     photo:
//       "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg",
//     isBookmarked: false,
//   },
// ];

// on initialization of this component, call our backend to set the value of animals on state


function App() {
  const [animals, setAnimals] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/animals')
    .then( (response) => {
      console.log('response data', response.data);
      const initalAnimalData = [];
      // console.log(response.data[0])
      // for  (const animal in response.data) {
      //   console.log(animal.name)
      response.data.forEach(animal => {
        console.log('animal', animal);
        initalAnimalData.push(animal);
      });
      // }
      setAnimals(initalAnimalData)
    })
    .catch( (error) => {
      console.log('error', error);
    });
  }, [])


  const updateBookmark = (animalId) => {
    // create a new list of animals with updated bookmark value
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        // Method 1: Copy then modify.
        // let animal2 = {...animal};
        // animal2.isBookmarked = !animal.isBookmarked;
        // return animal2;

        // Method 2: Use spread syntax w/ override to create modified copy.
        animal.isBookmarked = !animal.isBookmarked;
        };
      return {...animal}
    });

    setAnimals(updatedAnimals);
  }


  const updateDelete = (animalId) => {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id !== animalId) {
        return { ...animal };
      }
    });
    // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
    const filteredUpdatedData = updatedAnimals.filter(function (element) {
      return element !== undefined;
    });
    setAnimals(filteredUpdatedData);
  }
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <AnimalList 
        listOfAnimals={animals} 
        updateBookmark={updateBookmark} 
        updateDelete={updateDelete}
      ></AnimalList>
    </section>
  );
}
export default App;