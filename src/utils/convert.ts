import section, { sectionPos } from '../constants/section';
import { IPos } from '../types/position';

export const section2Pos = (sectionNumber: number) => {
  return sectionPos[sectionNumber];
};

export const pos2Section = (pos: IPos) => {
  switch (JSON.stringify(pos)) {
    case JSON.stringify(sectionPos[section.intro]):
      return section.intro;
    case JSON.stringify(sectionPos[section.experience]):
      return section.experience;
    case JSON.stringify(sectionPos[section.about]):
      return section.about;
    case JSON.stringify(sectionPos[section.project]):
      return section.project;
    default:
      return section.error;
  }
};
