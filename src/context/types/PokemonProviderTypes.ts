export type ProviderTypes = {
  children: React.ReactNode;
};

export type ContextPokemonsType = {
  pokemons: PokemonsState[];
  loading: boolean;
  getMorePokemons: () => void;
};

export type GetAllPokemons = {
  results: {
    name: string;
    url: string;
  }[];
};

export type GetDetailsPokemons = {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

export type PokemonsState = {
  id: number;
  name: string;
  image: string;
  type: string;
};
