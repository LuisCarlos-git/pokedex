import PokemonCard from 'components/PokemonCard';
import SearchBar from 'components/SearchBar';
import { buttonVariants, cardVariants, searchbarVariants } from './animations';

import * as Styled from './styles';
import usePokemon from 'context/hooks/usePokemon';
import { AnimatePresence } from 'framer-motion';
import Button from 'components/Button';

const Home = () => {
  const { pokemons } = usePokemon();

  if (!pokemons.length) return null;

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
      <Styled.ButtonWrapper
        variants={buttonVariants}
        initial="hidden"
        animate="show"
      >
        <Button>More pokemons...</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
