//The responsibilty of this component is to be a resuable UI element that displays an Animals name, species, photo
// add age, photo(optional?) -- or default?



import './Animal.css';

import { useState } from 'react';

import PropTypes from 'prop-types';


// The responsibility of this component is to be a reusable UI element that displays an Animal's
const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
    //const [isBookmarked, setIsBookmarked] = useState(false);

    // const altText = `Photo of ${props.name}`;

    // Responsibility:
    // Event Handler
    // Update the state

    const toggleBookmark = () => {
        // we want event handler to do two things: 
            // update that info to SSOT -- single source of truth
            // update components internal state
        setIsBookmarked(!isBookmarked);
        // props.updateBookmark()
        // props.updateBookmark(props.name, setIsBookmarked)
        props.updateBookmark(props.id);
    }

    const altText = `Photo of ${props.name}`;

     // If the animal is bookmarked, the CSS class name should be
    //   .bookmarked
    // If the animal is not bookmarked, there should be no CSS class

    let animalStyle = 'Animal';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    const toggleDelete = () => {
        console.log("toggle Delete is called!")
        props.updateDelete(props.id)
    }

    return (
        <section className={animalStyle}>
        {/* <h3>Name: { props.name } (cute!)</h3>
        <p>Species: { props.species }</p> */}
        <div className='ribbon'></div>
        { props.photo ? <img src={ props.photo } alt={altText}></img> : "[No Photo]" }
   
        <h3>Name: { props.name }</h3>
        <p>Species: { props.species }</p>

        <button onClick={toggleBookmark} className="bookmark-button">🌟 Bookmark</button>
        <button onClick={toggleDelete} className="delete-button">🐶 Delete </button>

    </section>);
    
};
// don't actually have to use proptypes code can run without --
Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string,
    isBookmarked: PropTypes.bool,
    updateBookmark: PropTypes.func,
    updateDelete: PropTypes.func,


}

export default Animal;