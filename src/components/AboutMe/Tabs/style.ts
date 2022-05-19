import styled from 'styled-components';
import color from '../../../constants/color';

export const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Highlight = styled.span`
  position: relative;
  font-family: 'BMHannaPro';
  color: ${color.black};
  &::before {
    content: ' ';
    display: block;
    z-index: -1;
    height: 90%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: ${color.error};
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
    border-radius: 20% 25% 20% 24%;
    padding: 0.5rem 3px 3px 0.5rem;
  }
`;

export const Wrapper = styled.button`
  display: inline-block;
  font-family: 'BMHannaPro';
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${color.black};
  }
`;
