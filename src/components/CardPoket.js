import React from "react";
import usePokemon from "../hooks/usePokemon";
import Card from "./Card";

const CardPoket = ({ CrPoket }) => {
   const {data,loading} = usePokemon(CrPoket);
    console.log(data);

  return (
    <>
      {
        loading && <p>Cargando...</p>
      }
      <Card pokemon={data} />
    </>
  );
};

export default CardPoket;
