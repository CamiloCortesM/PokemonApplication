import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import PokemonCards from './PokemonCards';

const root = createRoot(document.getElementById('root'));
root.render(
   <PokemonCards />
);


