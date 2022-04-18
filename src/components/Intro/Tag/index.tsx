import React from 'react';
import { Wrapper } from './style';

interface ITag {
  string: string,
  idx: number,
};

const Tag = ({ string, idx }: ITag) => {
  return (
    <Wrapper idx={idx}>
      <span>{string}</span>
    </Wrapper>
  );
};

export default Tag;
