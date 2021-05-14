import React, { FC } from 'react';
import PokemonsContainer from './containers/Pokemons.container';

const App: FC = (): JSX.Element => {
    return (
        <main>
            <PokemonsContainer />
        </main>
    );
};

export default App;
