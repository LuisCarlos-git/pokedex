import { Search } from '@styled-icons/boxicons-regular/Search';
import TextField from 'components/TextField';
import * as Styled from './styles';

export type SearchBarProps = {
  error?: boolean;
  onInput?: (value: string) => void;
};

const SearchBar = ({ error = false, onInput }: SearchBarProps) => {
  const handleChange = (value: string) => {
    !!onInput && onInput(value);
  };

  return (
    <Styled.Wrapper error={error} aria-label="search bar">
      <TextField
        error={error}
        id="searchpokemon"
        name="searchpokemon"
        placeholder="Search pokemon"
        onInputValue={handleChange}
      />

      <Styled.SearchButton type="submit" error={error}>
        <Search size={20} />
      </Styled.SearchButton>
    </Styled.Wrapper>
  );
};

export default SearchBar;
