import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const PokemonsFinalList = props.thepokemons.map((pokemon, index) => {
    console.log(index);
    return (
      <li key={index}>
        <Pokemon
          pokemon={pokemon}
          name={pokemon.name}
          types={pokemon.types}
          urlImage={pokemon.url}
        />
      </li>
    );
  });
  return <ul className='pokeCards__final--list'>{PokemonsFinalList}</ul>;
};

export default PokeList;
