import { createContext, useState } from 'react';

import {
  ContextPokemonsType,
  GetAllPokemons,
  GetDetailsPokemons,
  PokemonsState,
  ProviderTypes
} from 'context/types/PokemonProviderTypes';
import services from 'api/services';
import { useEffect } from 'react';

export const PokemonContext = createContext<ContextPokemonsType>(
  {} as ContextPokemonsType
);

const PokemonPorvider = ({ children }: ProviderTypes) => {
  const [pokemons, setPokemons] = useState<PokemonsState[]>([]);
  const [offset, setOffset] = useState(8);
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    const response = await services.getAllPokemons<GetAllPokemons>();

    const pokemonPromises = response.results.map(async pokemon => {
      return await services.getDetailsPokemons<GetDetailsPokemons>(
        pokemon.name
      );
    });
    const results: PokemonsState[] = await Promise.all(pokemonPromises).then(
      result => {
        return result.map(pokemon => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other['official-artwork'].front_default,
            type: pokemon.types[0].type.name
          };
        });
      }
    );

    setPokemons(oldPokemons => [...oldPokemons, ...results]);
    setLoading(false);
  };

  const getMorePokemons = async () => {
    setLoading(true);
    setOffset(old => old + 8);
    const response = await services.getMorePokemons<GetAllPokemons>(offset);

    const pokemonPromises = response.results.map(async pokemon => {
      return await services.getDetailsPokemons<GetDetailsPokemons>(
        pokemon.name
      );
    });
    const results: PokemonsState[] = await Promise.all(pokemonPromises).then(
      result => {
        return result.map(pokemon => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other['official-artwork'].front_default,
            type: pokemon.types[0].type.name
          };
        });
      }
    );

    setPokemons(results);

    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const value: ContextPokemonsType = {
    pokemons,
    getMorePokemons,
    loading
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export default PokemonPorvider;
