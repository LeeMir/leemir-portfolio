import React from 'react';

import { Container, Wrapper } from './style';
import '../../styles/fonts.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
