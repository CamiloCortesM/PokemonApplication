import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="Card-Pokemon animate__animated animate__fadeIn">
      <div className="Card-header">
        <div className="Card-title">
          <h3>{pokemon.name} #{pokemon.id}</h3>
        </div>
        <div className="Card-img">
          <img src={pokemon.url} alt="pokemon" />
        </div>
        <div className="Card-exp">
          <h4>{pokemon.hp}hp</h4>
          <h4>{pokemon.exp}exp</h4>
        </div>
      </div>
      <div className="Card-fotter">
        <div className="Card-fotter-Desc">
          <h3>{pokemon.atack}</h3>
          <p>Ataque</p>
        </div>
        <div className="Card-fotter-Desc">
          <h3>{pokemon.defence}</h3>
          <p>Defensa</p>
        </div>
        <div className="Card-fotter-Desc">
          <h3>{pokemon.special}</h3>
          <p>especial</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
