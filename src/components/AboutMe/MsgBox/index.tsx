import React from 'react';
import { Wrapper } from './style';

const MsgBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default MsgBox;
