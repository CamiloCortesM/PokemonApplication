import React from 'react'

const Card = ({pokemon}) => {
    console.log(pokemon)
  return (
    <div>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.id}</p>
        <img src={pokemon.url} alt='pokemon'/>
    </div>
  )
}

export default Card