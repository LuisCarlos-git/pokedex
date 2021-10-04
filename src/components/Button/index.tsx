import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode | React.ReactNodeArray;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => (
  <Styled.Button>{children}</Styled.Button>
);

export default Button;
