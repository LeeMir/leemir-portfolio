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
    opacity: 0;
    transform: translateY(0.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const openBackground = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 200vw;
  }
`;

const openBackgroundParticle = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
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
  width: 200vw;
  height: 200vh;
  z-index: 1;
  opacity: 0;
  animation: ${openBackgroundParticle} 0.8s ease-in-out 4.5s forwards;
`;

export const BackgroundWrapper = styled.div`
  width: 0;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: -100vw;
  z-index: 0;
  overflow: hidden;
  animation: ${openBackground} 0.7s ease-in-out forwards;
`;

export const Background = styled.img`
  position: absolute;
  width: 200vw;
  height: 100%;
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
  animation: ${openTitle} 0.7s ease-in-out 1.2s forwards;
`;

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
  animation: ${openSubTitle} 0.5s ease-in 2.4s forwards;
`;

export const TagContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  gap: 1rem;
`;
