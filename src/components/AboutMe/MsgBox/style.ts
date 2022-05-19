import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
  width: calc(100% - 2rem);
  padding: 0.75rem 1rem;
  line-height: 1.5rem;
  border-radius: 3px;
  font-family: 'BMHannaAir', sans-serif, 'TossFaceFontMac';
  font-size: 1rem;
  background-color: ${color.white};
  box-shadow: 0 4px 5px rgba(0,0,0,.5);
  transition: 0.6s;

  &:hover {
    transform: translate(0, -10%);
    background-color: rgba(0, 0, 0, 0.829);
    color: ${color.white};
  }
`;
