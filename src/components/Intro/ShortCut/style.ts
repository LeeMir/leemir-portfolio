import styled, { keyframes } from 'styled-components';
import color from '../../../constants/color';

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
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${color.background};
  transition: 0.6s;
  box-shadow: 0 5px 4px rgba(0,0,0,.5);
  border: none;
  cursor: pointer;
  animation: ${appearAnimation} 0.6s ease-in-out ${(props) => 2.3 + 0.6 * props.idx}s forwards;

  img {
    width: 75%;
  }

  &:hover {
    transform: translate(0, -10%);
    background-color: rgba(0, 0, 0, 0.829);
    img {
      filter: invert(1);
    }
  }
`;
