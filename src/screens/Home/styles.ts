import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 120rem;
    ${theme.utils.px(theme.spacings[16])};
    ${theme.utils.py(theme.spacings[24])};
    margin: 0 auto;

    ${theme.media.query(590)} {
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `}
`;
export const SearchBarWrapper = styled(motion.section)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings[48]};
    max-width: 50rem;

    ${theme.media.query(590)} {
      width: 100%;
    }
  `}
`;
export const CardsWrapper = styled(motion.section)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.spacings[16]};
    max-width: 80rem;

    ${theme.media.query(590)} {
      grid-template-columns: repeat(3, 1fr);
    }
    ${theme.media.query(768)} {
      grid-template-columns: repeat(4, 1fr);
      min-height: 464px;
    }
  `}
`;

export const ButtonWrapper = styled(motion.div)`
  width: 100%;
  max-width: 50rem;
  margin: 6rem 0 0;
`;

export const InvisbleDiv = styled(motion.div)`
  display: block;
  height: 464px;
  width: 768px;
  background: red;
  color: black;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
