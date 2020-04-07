import React from 'react';

const Pokemon = (props) => {
  return(
    <li className="pokeList__poke">
      <div className="pokeList__poke-image">
        <img src={props.img} alt="pokemon"></img>
      </div>
      <div className="pokeList__poke-info">
        <h1>{props.pokeName}</h1>
        <h2>TYPES</h2>
        <ul className="types">
     
          {props.poketypes.map((singletypes,index) => 
            <li key={index}>
              {singletypes}
            </li>
          )}
        </ul>
      </div>
    </li>
  )
}

export default Pokemon;