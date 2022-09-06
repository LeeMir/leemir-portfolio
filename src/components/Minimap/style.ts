import styled, { keyframes } from 'styled-components';
import color from '../../constants/color';

const openMinimap = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
`;

export const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 8rem;
  height: 6rem;
  bottom: 2rem;
  right: 2rem;
  opacity: 0;

  background-color: ${color.gray};
  border-radius: 1rem;

  align-items: center;
  justify-items: center;

  transition: opacity 0.2s ease-out;
  animation: ${openMinimap} 0.3s ease-in-out 4.5s forwards;

  &:hover {
    opacity: 0.55;
  }
`;
