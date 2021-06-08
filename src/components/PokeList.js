import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const PokemonsFinalList = props.id.map((pokemon, index) => {
    console.log(index);
    return (
      <li key={index}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return <ul>{PokemonsFinalList}</ul>;
};

export default PokeList;
