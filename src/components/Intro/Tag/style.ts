import styled, { keyframes } from 'styled-components';
import color, { gradient } from '../../../constants/color';

interface IWrapper {
  idx: number
}

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.button<IWrapper>`
  opacity: 0;
  color: ${color.black};
  padding: 0.2rem;
  border: 3px solid ${(props) => props.idx ? gradient[props.idx] : color.primary};
  border-radius: 10rem;
  font-size: 1.8rem;
  transition: all 0.2s ease-in-out;
  animation: ${appearAnimation} 0.5s ease-in-out ${(props) => 7 - 0.5 * props.idx}s forwards;

  span {
    padding: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.idx ? gradient[props.idx] : color.primary};
  }
`;
