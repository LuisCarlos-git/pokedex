import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from 'utils/helpers/tests/render';

import SearchBar from '.';

describe('<SearchBar />', () => {
  it('should render the SearchBar', () => {
    const { container } = renderWithTheme(<SearchBar />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the SearchBar without error', () => {
    const { container } = renderWithTheme(<SearchBar />);

    expect(container.firstChild).toHaveStyle({
      'box-shadow': '0px 1px 3px 1px #191920'
    });
  });

  it('should render the SearchBar with error', () => {
    const { container } = renderWithTheme(<SearchBar error={true} />);

    expect(container.firstChild).toHaveStyle({
      'box-shadow': '0px 1px 3px 1px #cf3434'
    });
  });

  it('should render the call onInput', async () => {
    const onInput = jest.fn();
    renderWithTheme(<SearchBar onInput={onInput} />);

    const input = screen.getByRole('textbox');
    const text = 'test call function';

    userEvent.type(input, text);
    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });
});
