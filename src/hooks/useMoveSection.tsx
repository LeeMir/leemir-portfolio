import React, { useState } from 'react';
import move from '../constants/move';
import { IPos } from '../types/position';

type ReturnTypes = [IPos, (action: string) => void];

const useMoveSection = (initialPos: IPos): ReturnTypes => {
  const [pos, setPos] = useState(initialPos);
  const moveSection = (action: string) => {
    setPos((prev) => {
      let {x, y} = prev;
      switch (action) {
        case move.upKB:
        case move.upArrow:
          y += (y === 0 ? 0 : 100);
          break;
        case move.rightKB:
        case move.rightArrow:
          x -= (x <= -100 ? 0 : 100);
          break;
        case move.downKB:
        case move.downArrow:
          y -= (y <= -100 ? 0 : 100);
          break;
        case move.leftKB:
        case move.leftArrow:
          x += (x === 0 ? 0 : 100);
          break;
      }
      return {x, y};
    });
  };
  return [pos, moveSection];
};

export default useMoveSection;
