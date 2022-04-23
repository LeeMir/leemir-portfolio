import React, { useEffect } from 'react';
import move from '../../constants/move';
import useMoveSection from '../../hooks/useMoveSection';

import { Container, Wrapper } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [pos, moveSection] = useMoveSection({x: 0, y: 0});
  const eventListener = () => {
    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          moveSection(move.up);
          break;
        case 'ArrowRight':
          moveSection(move.right);
          break;
        case 'ArrowDown':
          moveSection(move.down);
          break;
        case 'ArrowLeft':
          moveSection(move.left);
          break;  
      }
    });
  };

  useEffect(() => {
    eventListener();
  }, []);

  return (
    <Wrapper>
      <Container x={pos.x} y={pos.y}>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
