import React, { useLayoutEffect } from 'react';
import Particles from 'particlesjs';
import TypeIt from 'typeit';

import { Background, Container, TagContainer, Text, TextWrapper } from './style';
import { gradient } from '../../constants/color';
import Tag from './Tag';
import Section from '../Section';

const Intro = () => {
  useLayoutEffect(() => {
    Particles.init({
      selector: '.intro-background',
      color: Object.values(gradient),
      connectParticles: false,
      speed: 0.4,
      maxParticles: 20,
      sizeVariations: 50,
    });
    const typeit = new (TypeIt as any)('.text', {
      speed: 100,
    })
      .pause(1000)
      .type(' LeeMir입니다.') // 11자
      .move(null, {to: 'START', delay: 300})
      .type('꿈을 그리는 개발자, ') // 12자
      .move(null, {to: 'START', delay: 100})
      .move(1)
      .pause(100)
      .delete(1)
      .pause(100)
      .type('<strong>꿈</strong>')
      .go();
  }, []);
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Text className='text' />
        </TextWrapper>
        <TagContainer>
          <Tag string='#FE' idx={4} />
          <Tag string='#UI/UX' idx={3} />
          <Tag string='#JS' idx={2} />
          <Tag string='#TS' idx={1} />
          <Tag string='#React' idx={0} />
        </TagContainer>
        <Background className='intro-background' />
      </Container>
    </Section>
  );
};

export default Intro;
