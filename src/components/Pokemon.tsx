import React, { FC } from 'react';
import { PokemonProps } from '../types';

const Pokemon: FC<PokemonProps> = ({ pokemon }): JSX.Element => {
    return (
        <div>
            <p>Hello</p>
        </div>
    );
};

export default Pokemon;
