import usePokemon from 'context/hooks/usePokemon';

import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import PokemonCard from 'components/PokemonCard';

import {
  buttonVariants,
  cardVariants,
  itemVariants,
  searchbarVariants
} from './animations';

import * as Styled from './styles';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const { pokemons, getMorePokemons, loading } = usePokemon();
  return (
    <Styled.Wrapper>
      <Styled.SearchBarWrapper
        variants={searchbarVariants}
        initial="hidden"
        animate="show"
      >
        <SearchBar />
      </Styled.SearchBarWrapper>

      <AnimatePresence exitBeforeEnter>
        {!loading && (
          <Styled.CardsWrapper
            variants={cardVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {pokemons.map(item => (
              <PokemonCard
                variants={itemVariants}
                key={item.id}
                name={item.name}
                type={item.type}
                pokeimage={item.image}
              />
            ))}
          </Styled.CardsWrapper>
        )}
      </AnimatePresence>

      <Styled.ButtonWrapper
        variants={buttonVariants}
        initial="hidden"
        animate="show"
      >
        <Button onClick={() => getMorePokemons()}>More pokemons...</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
