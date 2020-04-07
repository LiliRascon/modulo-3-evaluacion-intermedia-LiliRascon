import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return(
   
    <ul>
       <h1>MI LISTA DE POKEMONS</h1>
      {props.dataList.map((pokeObject,index) =>
        <Pokemon key={index}
              img={pokeObject.url}
              pokeName={pokeObject.name}
              poketypes={pokeObject.types}
       
        />
      )}
      <h5>MODULO 3 EXAMEN INTERMEDIO LILIANA RASCÓN</h5>
    </ul>
  )
}

export default PokeList;