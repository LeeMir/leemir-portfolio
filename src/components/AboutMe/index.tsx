import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { sectionState } from '../../stores/section';
import Section from '../Section';
import PersonalInfo from './sections/PersonalInfo';
import Profile from './Profile';
import { Board, Container, InfoContainer } from './style';
import GreetingMsg from './sections/GreetingMsg';
import PeerFeedback from './sections/PeerFeedback';
import section from '../../constants/section';
import Tabs from './Tabs';

export const 소개글 = '소개글';
export const 인적사항 = '인적사항';
export const 동료평가 = '동료평가';

const AboutMe = () => {
  const sectionNum = useRecoilValue(sectionState);
  const [tab, setTab] = useState(소개글);
  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tabName = e.currentTarget.name;
    setTab(tabName);
  };

  return (
    <Section>
      <Container>
        <Board className={sectionNum === section.about ? 'about-board' : ''}>
          <Profile />
          <InfoContainer>
            <Tabs tab={tab} tabHandler={handleClickTab} />
            { tab === 소개글 && <GreetingMsg /> }
            { tab === 인적사항 && <PersonalInfo /> }
            { tab === 동료평가 && <PeerFeedback /> }
          </InfoContainer>
        </Board>
      </Container>
    </Section>
  );
};

export default AboutMe;
