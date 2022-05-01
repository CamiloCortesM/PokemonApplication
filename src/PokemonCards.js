import React, { useState } from "react";
import CardPoket from "./components/CardPoket";

const PokemonCards = () => {
  const [pokemon] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
  return (
    <div>
      <h1 className="animate__animated animate__zoomIn">Pokemon</h1>
      <div className="Container">
      {
        pokemon.map(CrPoket=>{
          return <CardPoket key={CrPoket} CrPoket={CrPoket}/>
        })
      }
      </div>
    </div>
  );
};

export default PokemonCards;
