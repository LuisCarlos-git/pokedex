import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 20rem;
    padding: 1.5rem;
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${theme.colors['secondary-color']};
  `}
`;
export const PokeImage = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    margin-bottom: ${theme.spacings[8]};
  `}
`;
export const PokeInfos = styled.div`
  text-align: center;
`;
export const PokeName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors['font-color']};
    font-size: ${theme.font.sizes[14]};
  `}
`;

export const PokeType = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors['subtext-color']};
    font-size: ${theme.font.sizes[14]};
  `}
`;
