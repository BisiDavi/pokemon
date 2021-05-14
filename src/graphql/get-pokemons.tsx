import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query GetPokemon($first: Int!) {
        pokemons(first: $first) {
            id
            name
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            image
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            classification
        }
    }
`;
