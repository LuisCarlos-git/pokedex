import usePokemon from 'context/hooks/usePokemon';

import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import PokemonCard from 'components/PokemonCard';

import { buttonVariants, cardVariants, searchbarVariants } from './animations';

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

      {loading ? (
        <Styled.InvisbleDiv />
      ) : (
        <AnimatePresence>
          {pokemons.length && (
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
      )}

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
