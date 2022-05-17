import React, { useLayoutEffect } from 'react';
import Particles from 'particlesjs';

import { Background, Canvas, Container, SubTitle, TagContainer, TextWrapper, Title, TitleWrapper } from './style';
import { gradient } from '../../constants/color';
import Section from '../Section';
import BGImg from '../../assets/images/intro-background.svg';
import GithubIcon from '../../assets/images/icon-github.svg';
import TistoryIcon from '../../assets/images/icon-tistory.svg';
import ShortCut from './ShortCut';

const Intro = () => {
  useLayoutEffect(() => {
    Particles.init({
      selector: '.intro-canvas',
      color: Object.values(gradient),
      connectParticles: false,
      speed: 0.2,
      maxParticles: 20,
      sizeVariations: 50,
    });
  }, []);
  return (
    <Section>
      <Container>
        <TextWrapper>
          <TitleWrapper>
            <Title>LeeMir</Title>
          </TitleWrapper>
          <SubTitle>"꿈을 그리는 FE 개발자"</SubTitle>
        </TextWrapper>
        <TagContainer>
          <ShortCut src={GithubIcon} idx={0} to='https://github.com/LeeMir' />
          <ShortCut src={TistoryIcon} idx={1} to='https://think-thing.tistory.com' />
        </TagContainer>
        <Canvas className='intro-canvas' />
        <Background src={BGImg} />
      </Container>
    </Section>
  );
};

export default Intro;
