import React, { useState } from 'react';
import move from '../constants/move';
import { IPos } from '../types/position';

type ReturnTypes = [IPos, (action: string) => void];

const useMoveSection = (initialPos: IPos): ReturnTypes => {
  const [pos, setPos] = useState(initialPos);
  const moveSection = (action: string) => {
    switch (action) {
      case move.upKB:
      case move.upArrow:
        setPos((prev) => {return {x: prev.x, y: prev.y + 100}});
        break;
      case move.rightKB:
      case move.rightArrow:
        setPos((prev) => {return {x: prev.x - 100, y: prev.y}});
        break;
      case move.downKB:
      case move.downArrow:
        setPos((prev) => {return {x: prev.x, y: prev.y - 100}});
        break;
      case move.leftKB:
      case move.leftArrow:
        setPos((prev) => {return {x: prev.x + 100, y: prev.y}});
        break;
    }
  };

  return [pos, moveSection];
};

export default useMoveSection;
