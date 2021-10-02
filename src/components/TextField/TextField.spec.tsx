import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from 'utils/helpers/tests/render';

import TextField from '.';

const props = {
  id: 'id',
  name: 'test'
};

describe('<TextField />', () => {
  it('should render the Input', () => {
    renderWithTheme(<TextField {...props} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the input with error', () => {
    renderWithTheme(<TextField {...props} error={true} />);

    expect(screen.getByRole('textbox')).toHaveStyleRule('color', '#cf3434');
  });

  it('should render the the call onchange', async () => {
    const onChange = jest.fn();
    renderWithTheme(<TextField {...props} onInputValue={onChange} />);

    const input = screen.getByRole('textbox');
    const value = 'text test';

    userEvent.type(input, value);
    await waitFor(() => {
      expect(input).toHaveValue(value);
      expect(onChange).toHaveBeenCalledTimes(value.length);
    });

    expect(onChange).toHaveBeenCalledWith(value);
  });
});
