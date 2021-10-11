import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/helpers/tests/render';

import Loading from '.';

describe('<Loading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Loading />);
  });
});
