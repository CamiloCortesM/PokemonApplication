import React, { useEffect, useState } from "react";
import { pokefunc } from "../helpers/Pokefunc";
import Card from "./Card";

const CardPoket = ({CrPoket}) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    pokefunc(CrPoket).then((img) => {
      setPokemon(img);
    });
  }, [CrPoket]);

  return (
    <>
    <Card pokemon={pokemon} />
    </>  
  );
};

export default CardPoket;
