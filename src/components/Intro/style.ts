import styled, { keyframes } from 'styled-components';
import color, { gradient } from '../../constants/color';

const gradientAnimation = keyframes`
  0% {
    color: ${gradient[0]};
  }
  20% {
    color: ${gradient[1]};
  }
  40% {
    color: ${gradient[2]};
  }
  60% {
    color: ${gradient[3]};
  }
  80% {
    color: ${gradient[4]};
  }
  100% {
    color: ${gradient[5]};
  }
`;

const cresendoAnimation = keyframes`
  from {
    font-size: 5rem;
  }
  to {
    font-size: 8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Background = styled.canvas`
  position: absolute;
  z-index: 0;
`;

export const TextWrapper = styled.div`
  position: relative;
  left: 5rem;
  z-index: 100;
  width: 50rem;
  height: 17rem;
  cursor: default;
  user-select: none;
`;

export const Text = styled.span`
  font-size: 5rem;
  strong {
    font-weight: 700;
    color: ${color.primary};
    animation: ${cresendoAnimation} 2s ease-in-out forwards;
    &:hover {
      animation: ${cresendoAnimation} 2s ease-in-out forwards,
                ${gradientAnimation} 2.5s linear infinite alternate;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  position: relative;
  left: 5rem;
  z-index: 100;
  gap: 1rem;
`;
