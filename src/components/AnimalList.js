
import './AnimalList.css'
import Animal from './Animal';


// const AnimalList = () => {

//     const firstAnimal = {
//         name: "violet",
//         species: "pitbull mix"

//     };
//     const secondAnimal = {
//         name: "norman",
//         species: "puppy"

//     };
//     const thirdAnimal = {
//         name: "juni",
//         species: "poodle"
// 
    // };
// wont see for loop method
    // const renderedAnimals = [];
    // for (const creture of listOfAnimals) {
    //     renderedAnimals.push (
    //         <li> <Animal 
    //         name={creature.name}
    //         species={creature.species}
    //     />
    //      </li>
    //     )
    // };

   // const renderedAnimals = listOfAnimals.map(creature => (

            //{/*  <li> <Animal 
               // name={creature.name}
                // species={creature.species}
            // />
        // </li> */}

        // console.log({ renderedAnimals }); ));

// The responsibility of this component is to be a reusable UI element that displays an Animal's
    const Animal = (props) => {


    return (<section className="AnimalList">
        {/* <h2>Animal List</h2> */}
        <h3>Name: { props.name } (cute!)</h3>
        <p>Species: { props.species }</p>
        { props.photo ? <img src={ props.photo } alt="Photo of Willow"></img> : "[No Photo]" }
    </section>);
};
        {/* <li><Animal name="Violet" species="pit mix"></Animal></li> */}
        {/* <li> */}
            {/* <Animal 
            // name={firstAnimal.name}
            // species={firstAnimal.species} 
        // /> */}
         {/* {
            listOfAnimals.map(creature => (
                <Animal 
                    name={firstAnimal.name}
                    species={firstAnimal.species} 
                 /> 
                
        <li><Animal></Animal></li>
        <li><Animal></Animal></li>

            )) */}
            
    Animal.propTypes = {
        name: PropTypes.string,
        species: PropTypes.string.isRequired,
        adopted: PropTypes.bool,
        age: PropTypes.number,
        photo: PropTypes.string
    }
            

export default AnimalList;


// Ask you all to make a component 
// 3 components - one being App 