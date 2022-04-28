import { atom } from 'recoil';
import section from '../constants/section';

export const sectionState = atom({
  key: 'sectionState',
  default: section.intro
});
