import React, { useState } from 'react';
import data from '../data/data.json';
import '../stylesheets/App.scss';
import Pokemon from './Pokemon';
import PokeList from './PokeList';

const App = () => {
  const [pokemonsData, setPokemons] = useState(data);
  return (
    <div>
      <h2>My Pokemon's list</h2>
      <PokeList thepokemons={pokemonsData} />

      <h3>My pokemon</h3>
      <Pokemon
        name='bulbasaur'
        types={['poison', 'grass']}
        urlImage='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      />
    </div>
  );
};

export default App;
