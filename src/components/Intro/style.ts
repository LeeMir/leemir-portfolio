import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Background = styled.canvas`
  position: absolute;
  z-index: 0;
`;

export const TextWrapper = styled.div`
  position: relative;
  left: 5rem;
  z-index: 100;
  width: 50rem;
  height: 15rem;
`;

export const Text = styled.span`
  font-size: 5rem;
  strong {
    font-size: 7rem;
    font-weight: 700;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  position: relative;
  left: 5rem;
  z-index: 100;
  gap: 1rem;
`;
