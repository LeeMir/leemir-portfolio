import React from 'react';
import { Wrapper } from './style';

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
};

export default Section;
