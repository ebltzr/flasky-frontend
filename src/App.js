
import { useState } from "react"; // put first as you want to run this first
import './App.css';

import AnimalList from './components/AnimalList';



const INITIALS_ANIMALS = [
  {
      id: 100,
      name: "Violet",
      species: "pitbull mix",
      isBookmarked: false,
  },
  {
      id: 101,
      name: "Norman",
      species: "Pyrenees puppy",
      isBookmarked: false,
  },
  {
      id: 102,
      name: "Juni",
      species: "Poodle",
      photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
      isBookmarked: false,
  },
  {
      id: 103,
      name: "Sabine",
      species: "Dog",
      isBookmarked: false,
  },
  {
    id: 104,
    name: "Pap and Bra",
    species: "Kittens",
    photo: "https://media.istockphoto.com/id/1171983473/photo/cat-on-glass-bottom-view.jpg?s=612x612&w=0&k=20&c=zV0YMryCCF7zM3NaEkUnqVNDhRgqB2xVa_BCkZ-y95o=",
    isBookmarked: false,
}

];


function App() {
  const [animals, setAnimals] = useState(INITIALS_ANIMALS);

  // const updateBookmark = (animalId, bookmarkBoolean) => {
  //   console.log("hey the bookmark is updated!")
  //   //iterate through animals & add bookmark: False -- default
  //   const updatedAnimals = animals.map(animal => {
  //     // for each animal -- map is like a for loop
  //     if (animal.id === animalId) {
  //       // bookmarkboolean -- 
  //       return { ...animal, bookmark: bookmarkBoolean };
  //     } else {
  //       return { ...animal }
  //     }
  //   })

  const updateBookmark = (animalId) => {


   // const updateBookmark = (animalID, bookmarkStatus) => {
   // console.log('a  bookmark was updated', animalId);
    // console.log ('this is my animal ID', animalId )
   // console.log('this is my value for bookmark', bookmarkStatus )
  

    // use are setter from useState, and pass the updated animals list
    // setAnimals(updatedAnimals);

    // for (const animal in animals) {
    //   if (animal.id === animalId) {
    //     animal.isBookmarked = !animal.isBookmarked;
    //   } 
    // }

    // create a new list of animals with updated bookmark value
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        animal.isBookmarked = !animal.isBookmarked;
        // return {...animal}
    // } else {
     //   return {...animal}
      };
      return { ...animal }
    });

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

    setAnimals(updatedAnimals);

   }



  // Comments outside of JSX (but still in js that is not "returned") can still be //'s
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency </h1>
      {/* <h2>Animal Listings</h2> */}
      {/* what the props are called below is what they will be referred to inside animalList */}
      {/* <AnimalList animals={ animals } updateBookmark={updateBookmark}></AnimalList> */}
      {/* <AnimalList listOfAnimals={animals} updateBookmark={updateBookmark}></AnimalList> */}
      <AnimalList 
        listOfAnimals={animals} 
        updateBookmark={updateBookmark} 
        updateDelete={updateDelete}
      ></AnimalList>
    
    </section>
  );
}

export default App;
