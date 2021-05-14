import React, { FC } from 'react';
import { PokemonProps } from '../types';
import { displayFeatures, displayPhysic } from '../utils/pokemon';

const Pokemon: FC<PokemonProps> = ({ pokemon }): JSX.Element => {
    return (
        <div className='pokemon'>
            <div className='pokemon_name'>
                <h3>{pokemon.name}</h3>
            </div>
            <div className='pokemon_meta'>
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className='pokemon_image'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='pokemon_info'>
                {displayPhysic(pokemon)}
                {displayFeatures(pokemon)}
            </div>
        </div>
    );
};

export default Pokemon;
