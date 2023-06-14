//The responsibilty of this component is to be a resuable UI element that displays an Animals name, species, photo

import './Animal.css';

const Animal = () => {
    return (<section className="Animal">
            <h3>Animal name: Willow</h3>
            <p>Species: Cat</p>
            <img src='https://placekitten.com/g/200/300' ></img>
        </section>);
};

export default Animal;