import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import move from '../constants/move';
import { sectionState } from '../stores/section';
import { IPos } from '../types/position';
import { pos2Section, section2Pos } from '../utils/convert';

type ReturnTypes = [IPos, (action: string) => void];

const useMoveSection = (initialPos: IPos): ReturnTypes => {
  const [pos, setPos] = useState(initialPos);
  const [section, setSection] = useRecoilState(sectionState);
  const moveSection = useCallback(
    (action: string) => {
      setPos((prev) => {
        let {x, y} = prev;
        switch (action) {
          case move.upKB:
          case move.upKBKR:
          case move.upArrow:
            y += (y === 0 ? 0 : 100);
            break;
          case move.rightKB:
          case move.rightKBKR:
          case move.rightArrow:
            x -= (x <= -100 ? 0 : 100);
            break;
          case move.downKB:
          case move.downKBKR:
          case move.downArrow:
            y -= (y <= -100 ? 0 : 100);
            break;
          case move.leftKB:
          case move.leftKBKR:
          case move.leftArrow:
            x += (x === 0 ? 0 : 100);
            break;
        }
        return {x, y};
      });
    }, [pos]
  );
  useEffect(() => {
    setSection(pos2Section(pos));
  }, [pos]);

  useEffect(() => {
    const nextPos = section2Pos(section);
    if (nextPos.x !== null && nextPos.y !== null) {
      setPos(nextPos);
    }
  }, [section])
  return [pos, moveSection];
};

export default useMoveSection;
