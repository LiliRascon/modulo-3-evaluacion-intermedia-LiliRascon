import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return(
  
    <ul>
      {props.dataList.map((pokeObject,index) =>
        <Pokemon key={index}
              img={pokeObject.url}
              pokeName={pokeObject.name}
              poketypes={pokeObject.types}
       
        />
      )}
    </ul>
  )
}

export default PokeList;