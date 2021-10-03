import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/helpers/tests/render';

import PokemonCard from '.';

describe('<PokemonCard />', () => {
  it('should render the PokemonCard', () => {
    renderWithTheme(
      <PokemonCard type="grass" pokeimage="teste" name="bulba" />
    );

    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('bulba')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'teste');
  });
});
