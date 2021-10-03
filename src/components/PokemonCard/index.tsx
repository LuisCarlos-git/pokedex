import * as Styled from './styles';

export type PokemonCardProps = {
  pokeimage: string;
  name: string;
  type: string;
};

const PokemonCard = ({ name, pokeimage, type }: PokemonCardProps) => (
  <Styled.Wrapper>
    <Styled.PokeImage src={pokeimage} />
    <Styled.PokeInfos>
      <Styled.PokeName>{name}</Styled.PokeName>
      <Styled.PokeType>{type}</Styled.PokeType>
    </Styled.PokeInfos>
  </Styled.Wrapper>
);

export default PokemonCard;
