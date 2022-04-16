import styled from 'styled-components';
import color from '../../constants/color';

export const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  width: 100vw;
  height: 100vh;
  scroll-padding: 30% 0;
  background-color: ${color.background};
  overflow: auto;
  & > div {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
`;
