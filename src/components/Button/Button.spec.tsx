import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/helpers/tests/render';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Button>more pokemons</Button>);

    expect(screen.getByText('more pokemons')).toBeInTheDocument();
  });
});
