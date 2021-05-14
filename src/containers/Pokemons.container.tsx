import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components';

const PokemonsContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });
    return (
        <div className='pokemons'>
            {pokemons &&
                pokemons.map((pokemon: any, index: number) => (
                    <Pokemon key={index} pokemon={pokemon} />
                ))}
        </div>
    );
};

export default PokemonsContainer;
