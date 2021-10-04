import { Variants } from 'framer-motion';
import * as Styled from './styles';

export type PokemonCardProps = {
  pokeimage: string;
  name: string;
  type: string;
  variants?: Variants;
};

const PokemonCard = ({
  name,
  pokeimage,
  type,
  variants = {}
}: PokemonCardProps) => {
  return (
    <Styled.Wrapper variants={variants}>
      <Styled.PokeImage src={pokeimage} />
      <Styled.PokeInfos>
        <Styled.PokeName>{name}</Styled.PokeName>
        <Styled.PokeType>{type}</Styled.PokeType>
      </Styled.PokeInfos>
    </Styled.Wrapper>
  );
};

export default PokemonCard;
