import styled from 'styled-components';
import { IPos } from '../../types/position';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div<IPos>`
  display: flex;
  flex-wrap: wrap;
  width: 200vw;
  transform: translateX(${(props) => props.x}vw) translateY(${(props) => props.y}vh);
  transition: transform 0.5s ease-in-out;
`;
