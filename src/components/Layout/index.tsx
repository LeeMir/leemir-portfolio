import React from 'react';
import GlobalStyle from '../../styles/global';
import { Wrapper } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      {children}
      <GlobalStyle />
    </Wrapper>
  );
};

export default Layout;
