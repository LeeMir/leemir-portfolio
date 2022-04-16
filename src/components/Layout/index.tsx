import React from 'react';
import GlobalStyle from '../../styles/global';

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <>
      {children}
      <GlobalStyle />
    </>
  );
};

export default Layout;
