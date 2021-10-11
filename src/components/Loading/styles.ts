import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Spinner = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 1rem solid transparent;
    border-top-color: #ddd;
    animation: spinner 0.7s ease-in-out infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
