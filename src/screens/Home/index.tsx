import PokemonCard from 'components/PokemonCard';
import SearchBar from 'components/SearchBar';
import { cardVariants, searchbarVariants } from './animations';

import image from 'assets/image.png';

import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Wrapper>
      <Styled.SearchBarWrapper
        variants={searchbarVariants}
        initial="hidden"
        animate="show"
      >
        <SearchBar />
      </Styled.SearchBarWrapper>
      <Styled.CardsWrapper
        variants={cardVariants}
        animate="show"
        initial="hidden"
      >
        {Array.from(Array(8).keys()).map(item => (
          <PokemonCard
            variants={cardVariants}
            key={item}
            name="bulbasaur"
            type="grass"
            pokeimage={image}
          />
        ))}
      </Styled.CardsWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
