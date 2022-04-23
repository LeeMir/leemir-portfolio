import React, { useState } from 'react';
import move from '../constants/move';
import { IPos } from '../types/position';

type ReturnTypes = [IPos, (action: string) => void];

const useMoveSection = (initialPos: IPos): ReturnTypes => {
  const [pos, setPos] = useState(initialPos);
  const moveSection = (action: string) => {
    switch (action) {
      case move.up:
        setPos((prev) => {return {x: prev.x, y: prev.y + 100}});
        break;
      case move.right:
        setPos((prev) => {return {x: prev.x - 100, y: prev.y}});
        break;
      case move.down:
        setPos((prev) => {return {x: prev.x, y: prev.y - 100}});
        break;
      case move.left:
        setPos((prev) => {return {x: prev.x + 100, y: prev.y}});
        break;
    }
  };

  return [pos, moveSection];
};

export default useMoveSection;
