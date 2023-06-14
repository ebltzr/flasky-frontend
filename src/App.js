// import logo from './logo.svg';
import './App.css';

import AnimalList from './components/AnimalList';

function App() {
  // Comments outside of JSX (but still in js that is not "returned") can still be //
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency </h1>
      {/* <h2>Animal Listings</h2> */}
      <AnimalList></AnimalList>
    </section>
  );
}

export default App;
