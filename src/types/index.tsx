export interface PokemonProps {
    pokemon: {
        id: string;
        name: string;
        maxHP: string;
        maxCP: string;
        image: string;
        types: string[];
        fleeRate: string;
        classification: string;
        height: {
            minimum: string;
            maximum: string;
        };
        resistant: string[];
        weaknesses: string[];
        weight: {
            minimum: string;
            maximum: string;
        };
    };
}

export interface PokemonFeatureArray {
    types: string[];
    resistant: string[];
    weaknesses: string[];
}

export type featureIndex = 'types' | 'resistant' | 'weaknesses';

export type physicType = 'height' | 'weight';
