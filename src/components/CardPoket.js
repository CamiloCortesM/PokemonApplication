import React, { useEffect, useState } from 'react'
import Card from './Card';

const CardPoket = () => {
    const [pokemon, setPokemon] = useState({})

    const pokefunc = async()=>{
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/13');
        const {id,name,sprites} = await resp.json(); 
        setPokemon({
            id: id,
            name: name,
            url: sprites.other.dream_world.front_default
        }) 
    
    }


    useEffect(() => {
        pokefunc();
    }, [])
    

  
  return (
    <div>
        <div>
            <Card pokemon={pokemon}/>
        </div>
    </div>
  )
}

export default CardPoket