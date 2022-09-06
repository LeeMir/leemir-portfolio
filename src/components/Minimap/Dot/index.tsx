import React from 'react';
import { Circle } from './style';

const Dot = ({ active, onClick }: { active: boolean, onClick: () => void }) => {
  return (
    <Circle className={active ? 'active' : ''} onClick={onClick} />
  );
};

export default Dot;
