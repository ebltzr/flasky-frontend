//The responsibilty of this component is to be a resuable UI element that displays an Animals name, species, photo
// add age, photo(optional?) -- or default?

import './Animal.css';

const Animal = (props) => {
    return (
    <section className="Animal">
            <h3>Animal name: { props.name } (cute!)</h3>
            <p>Species: { props.species }</p>
            <img src='https://placekitten.com/g/200/300' alt='Photo of cat' ></img>
        </section>);
};

export default Animal;