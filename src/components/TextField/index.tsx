import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export type TextFieldProps = {
  id: string;
  name: string;
  value?: string;
  error?: boolean;
  placeholder?: string;
  onInputValue?: (value: string) => void;
} & InputAttributes;

const TextField = ({
  placeholder = '',
  error = false,
  value,
  onInputValue,
  id,
  name
}: TextFieldProps) => {
  const handleChange = (event: InputEvent) => {
    const inputvalue = event.target.value;
    !!onInputValue && onInputValue(inputvalue);
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        id={id}
        name={name}
        value={value}
        error={error}
        placeholder={placeholder}
        onChange={handleChange}
        aria-label="search"
      />
    </Styled.Wrapper>
  );
};

export default TextField;
