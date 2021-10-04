import PokemonCard from 'components/PokemonCard';
import SearchBar from 'components/SearchBar';
import { cardVariants, searchbarVariants } from './animations';

import * as Styled from './styles';
import usePokemon from 'context/hooks/usePokemon';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const { pokemons } = usePokemon();
  return (
    <Styled.Wrapper>
      <Styled.SearchBarWrapper
        variants={searchbarVariants}
        initial="hidden"
        animate="show"
      >
        <SearchBar />
      </Styled.SearchBarWrapper>
      <AnimatePresence>
        {!!pokemons.length && (
          <Styled.CardsWrapper
            variants={cardVariants}
            animate="show"
            initial="hidden"
          >
            {pokemons.map(item => (
              <PokemonCard
                variants={cardVariants}
                key={item.id}
                name={item.name}
                type={item.type}
                pokeimage={item.image}
              />
            ))}
          </Styled.CardsWrapper>
        )}
      </AnimatePresence>
    </Styled.Wrapper>
  );
};

export default Home;
