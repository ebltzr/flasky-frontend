
import './AnimalList.css'
import Animal from './Animal';


const AnimalList = () => {
    return (<section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalsList__list">
        <li><Animal></Animal></li>
        <li><Animal></Animal></li>
        <li><Animal></Animal></li>
        <li><Animal></Animal></li>
        </ul>
    </section>)
};

export default AnimalList;


// Ask you all to make a component 
// 3 components - one being App 