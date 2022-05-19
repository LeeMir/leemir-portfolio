import styled from 'styled-components';
import color from '../../../constants/color';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem 1rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color['primary-dark']};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${color.gray};
    border-radius: 0.5rem;
  }
`;

export const SubTitle = styled.div`
  font-family: 'BMHannaAir';
  font-size: 1.2rem;
`;
