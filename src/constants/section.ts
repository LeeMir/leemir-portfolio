export default {
  intro: 0,
  about: 1,
  experience: 2,
  project: 3,
  error: 4
};

export const sectionArr = [
  'intro',
  'about',
  'experience',
  'project',
  'error'
];

export const sectionPos = [
  { x: 0, y: 0 }, // intro
  { x: -100, y: 0 }, // about
  { x: 0, y: -100 }, // experience
  { x: -100, y: -100 }, // project
  { x: null, y: null } // error
];
