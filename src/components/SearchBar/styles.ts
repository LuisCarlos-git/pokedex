import styled, { css, DefaultTheme } from 'styled-components';

type StyledFormProps = {
  error: boolean;
};

type ButtonSearchProps = {
  error: boolean;
};

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    box-shadow: 0px 2px 4px -2px ${theme.colors['error-color']};
  `
};

const buttonModifiers = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors['error-color']};
  `
};

export const Wrapper = styled.div<StyledFormProps>`
  ${({ theme, error }) => css`
    border-radius: ${theme.border.radius};
    background: ${theme.colors['secondary-color']};
    ${theme.utils.py(theme.spacings[8])};
    ${theme.utils.px(theme.spacings[16])};
    ${theme.utils.center()};
    box-shadow: 0px 2px 4px -2px ${theme.colors['secondary-color']};
    transition: all 0.2s ease-in-out;

    ${error && wrapperModifiers.error(theme)}
  `}
`;
export const SearchButton = styled.button<ButtonSearchProps>`
  ${({ theme, error }) => css`
    ${theme.utils.center()};
    background: transparent;
    color: ${theme.colors['secondary-color-text']};
    cursor: pointer;
    border: 0;
    ${theme.utils.py(theme.spacings[4])};
    padding-left: ${theme.spacings[16]};
    transition: all 0.2s ease-in-out;

    ${error && buttonModifiers.error(theme)}
  `}
`;
