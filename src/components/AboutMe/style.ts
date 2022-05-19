import styled, { keyframes } from 'styled-components';
import color from '../../constants/color';

const fadeIn = (translate = true) => {
  return keyframes`
    0% {
      opacity: 0;
      ${translate ? 'transform: translateY(-1rem)' : '' };
    }
    100% {
      opacity: 1;
      ${translate ? 'transform: translateY(0)' : '' };
    }
  `;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  .about-board {
    & > *:first-child {
      opacity: 0;
      animation: ${fadeIn(false)} 0.5s ease-in 0.5s forwards;
    }
    & > *:last-child {
      opacity: 0;
      animation: ${fadeIn(false)} 0.5s ease-in 1.0s forwards;
    }
  }
`;

export const Board = styled.div`
  display: flex;
  width: 55%;
  padding: 5%;
  height: 55%;
  gap: 2rem;
  z-index: 100;
  background-color: ${color.background};
  border-radius: 50px;
  background: linear-gradient(145deg, #cac8cf, #f0eef6);
  box-shadow:  20px 20px 60px #bebdc4,
              -20px -20px 60px #ffffff;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 2rem);
  padding: 0 1rem 1rem 1rem;
  height: 100%;
  overflow: hidden;

  & > section {
    animation: ${fadeIn(true)} 0.5s ease-in forwards;
  }
`;
