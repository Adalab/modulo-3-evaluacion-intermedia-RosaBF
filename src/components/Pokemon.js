import React from 'react';

const Pokemon = (props) => {
  const pokeTypeList = props.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className='pokecard'>
      <img className='pokecard__img' src={props.urlImage} />
      <h2 className='pokecard__title'> {props.name} </h2>
      <ul className='pokecard_type'>{pokeTypeList}</ul>
    </article>
  );
};

export default Pokemon;
