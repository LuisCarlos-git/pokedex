import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 70rem;
    height: 4rem;
    background: #3e3ec9;
    border: 2px solid #fff;
    color: ${theme.colors['font-color']};
    cursor: pointer;
    border-radius: ${theme.border.radius};
    font-weight: 900;
  `}
`;
