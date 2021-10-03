import { Story, Meta } from '@storybook/react/types-6-0';
import PokemonCard, { PokemonCardProps } from '.';

import image from 'assets/image.png';

export default {
  title: 'PokemonCard',
  component: PokemonCard
} as Meta;

export const PokemonCardDefault: Story<PokemonCardProps> = args => (
  <PokemonCard {...args} />
);

PokemonCardDefault.args = {
  name: 'bulbasaur',
  type: 'grass',
  pokeimage: image
};
