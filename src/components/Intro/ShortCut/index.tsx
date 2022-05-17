import React from 'react';
import { Wrapper } from './style';

interface ShortCutValue {
  src: string,
  to: string,
  idx: number,
};

const ShortCut = ({ src, idx, to }: ShortCutValue) => {
  const handleClickBtn = () => {
    window.open(to, '_blank');
  };
  return (
    <Wrapper idx={idx} onClick={handleClickBtn}>
      <img src={src} alt={`icon ${idx}`} />
    </Wrapper>
  );
};

export default ShortCut;
