import React, { useEffect } from 'react';
import move from '../../constants/move';
import useMoveSection from '../../hooks/useMoveSection';

import { Container, Wrapper } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [pos, moveSection] = useMoveSection({x: 0, y: 0});
  const eventListener = () => {
    setTimeout(() => {
      document.addEventListener('keyup', (e) => {
        const input = e.key.toLowerCase();
        if (Object.values(move).includes(input)) {
          moveSection(input);
        }
      });
    }, 5500);
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
