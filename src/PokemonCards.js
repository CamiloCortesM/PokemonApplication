import React from "react";
import CardPoket from "./components/CardPoket";

const PokemonCards = () => {
  const Pokemon = [];
  for (let index = 1; index <= 50; index++) {
    Pokemon.push(index);
  }
  return (
    <div>
      <h1 className="animate__animated animate__zoomIn">Pokemon</h1>
      <div className="Container">
      {
        Pokemon.map(CrPoket=>{
          return <CardPoket key={CrPoket} CrPoket={CrPoket}/>
        })
      }
      </div>
    </div>
  );
};

export default PokemonCards;
