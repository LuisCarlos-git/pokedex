import { PokemonContext } from 'context/providers/PokemonProvider';
import { useContext } from 'react';

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) throw Error('UsePokemon must be used with PokemonPorvider');

  return context;
};

export default usePokemon;
