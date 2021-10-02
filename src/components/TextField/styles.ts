import styled, { css, DefaultTheme } from 'styled-components';

type StyledInputProps = { error: boolean };

export const Wrapper = styled.div`
  width: 100%;
  height: 3.5rem;
`;

const inputError = (theme: DefaultTheme) => css`
  color: ${theme.colors['error-color']};
  &::placeholder {
    color: ${theme.colors['error-color']};
  }
`;

export const Input = styled.input<StyledInputProps>`
  ${({ theme, error }) => css`
    border: 0;
    width: 100%;
    height: 100%;
    color: ${theme.colors['subtext-color']};
    font-size: ${theme.font.sizes[16]};
    background: transparent;

    &::placeholder {
      transition: all 0.2s ease-in-out;
      color: ${theme.colors['subtext-color']};
    }
    ${error && inputError(theme)}
  `}
`;
