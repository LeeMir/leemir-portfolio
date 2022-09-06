import React from 'react';
import { useRecoilState } from 'recoil';
import { sectionState } from '../../stores/section';
import Dot from './Dot';
import { Container } from './style';

const Minimap = () => {
  const [section, setSection] = useRecoilState(sectionState);
  const handleDotClick = (section: number) => {
    setSection(section);
  };

  return (
    <Container>
      <Dot active={section === 0} onClick={() => handleDotClick(0)} />
      <Dot active={section === 1} onClick={() => handleDotClick(1)} />
      <Dot active={section === 2} onClick={() => handleDotClick(2)} />
      <Dot active={section === 3} onClick={() => handleDotClick(3)} />
    </Container>
  );
};

export default Minimap;
