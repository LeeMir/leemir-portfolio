export default {
  intro: 0,
  experience: 1,
  about: 2,
  project: 3,
  error: 4
};

export const sectionArr = [
  'intro',
  'experience',
  'about',
  'project',
  'error'
];

export const sectionPos = [
  { x: 0, y: 0 }, // intro
  { x: -100, y: 0 }, // experience
  { x: 0, y: -100 }, // about
  { x: -100, y: -100 }, // project
  { x: null, y: null } // error
];
