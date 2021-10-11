import usePokemon from 'context/hooks/usePokemon';

import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import PokemonCard from 'components/PokemonCard';

import * as Styled from './styles';
import Loading from 'components/Loading';

const Home = () => {
  const { pokemons, getMorePokemons, loading } = usePokemon();
  return (
    <Styled.Wrapper>
      <Styled.SearchBarWrapper>
        <SearchBar />
      </Styled.SearchBarWrapper>

      {!loading && pokemons.length ? (
        <Styled.CardsWrapper>
          {pokemons.map(item => (
            <PokemonCard
              key={item.id}
              name={item.name}
              type={item.type}
              pokeimage={item.image}
            />
          ))}
        </Styled.CardsWrapper>
      ) : (
        <Styled.InvisbleDiv>
          <Loading />
        </Styled.InvisbleDiv>
      )}

      <Styled.ButtonWrapper>
        <Button onClick={() => getMorePokemons()}>More pokemons...</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default Home;
