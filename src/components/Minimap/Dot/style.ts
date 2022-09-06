import styled from 'styled-components';
import color from '../../../constants/color';

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${color.white};

  cursor: pointer;

  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: ${color['secondary-dark']};
  }

  &:hover {
    background-color: ${color.primary};
  }
`;
