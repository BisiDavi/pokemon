import {
    featureIndex,
    physicType,
    physicTypeInterface,
    PokemonFeatureArray,
} from '../types';

const pokemonArray: featureIndex[] = ['types', 'weaknesses', 'resistant'];

const physicArray: physicType[] = ['height', 'weight'];

const PokemonFeatures = (
    pokemon: PokemonFeatureArray,
    features: featureIndex,
) => {
    return (
        <ul>
            {features} :
            {pokemon[features].map((feature: any, index: number) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
    );
};

const PokemonPhysic = (pokemon: physicTypeInterface, physic: physicType) => {
    return (
        <ul className={physic}>
            {physic}
            <li>Minimum: {pokemon[physic].minimum}</li>
            <li>Maximum: {pokemon[physic].maximum}</li>
        </ul>
    );
};

export const displayPhysic = (pokemon: physicTypeInterface) =>
    physicArray.map((physic) => PokemonPhysic(pokemon, physic));

export const displayFeatures = (pokemon: PokemonFeatureArray) =>
    pokemonArray.map((feature) => PokemonFeatures(pokemon, feature));
