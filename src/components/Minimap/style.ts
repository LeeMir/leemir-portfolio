import styled from 'styled-components';
import color from '../../constants/color';

export const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 8rem;
  height: 6rem;
  bottom: 2rem;
  right: 2rem;

  background-color: ${color.gray};
  opacity: 0.4;
  border-radius: 1rem;

  align-items: center;
  justify-items: center;
`;
