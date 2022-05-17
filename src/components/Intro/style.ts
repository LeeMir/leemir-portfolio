import styled, { keyframes } from 'styled-components';

const openTitle = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const openSubTitle = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Canvas = styled.canvas`
  position: absolute;
  z-index: 1;
  opacity: 0.3;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 100;
  padding: 2rem;
  justify-content: center;
  cursor: default;
  user-select: none;
`;

export const TitleWrapper = styled.div`
  overflow: hidden;
  width: 0;
  animation: ${openTitle} 1s ease-in-out 0.5s forwards;
`

export const Title = styled.span`
  display: inline-block;
  font-family: 'GreatVibes';
  font-size: 7rem;
  padding: 1rem;
`;

export const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'BMHannaAir';
  font-size: 1.5rem;
  opacity: 0;
  animation: ${openSubTitle} 0.8s ease-in-out 1.5s forwards;
`;

export const TagContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  gap: 1rem;
`;
