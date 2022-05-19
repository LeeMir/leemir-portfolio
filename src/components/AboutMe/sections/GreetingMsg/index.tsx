import React from 'react';
import MsgBox from '../../MsgBox';
import { Container } from '../style';

const GreetingMsg = () => {
  return (
    <Container>
      <MsgBox>" 💁‍♂️ : 안녕하세요! 프론트엔드 개발자를 꿈꾸는 이명재입니다. "</MsgBox>
      <MsgBox>" 💡 : 일상생활에서 일어나는 일에 관심이 많으며, 그로부터 주로 아이디어를 얻습니다. "</MsgBox>
      <MsgBox>" 🎭 : 사용자의 입장에 쉽게 녹아드는 장점을 살려 한 걸음 앞의 UX를 고민합니다. "</MsgBox>
      <MsgBox>" ☕️ : 직접 갈아 내리는 커피 한 잔의 즐거움에 흥미를 갖는 중입니다."</MsgBox>
      <MsgBox>" 🐾 : 어려운 문제에 부딪히면 때와 장소를 가리지 않고 해결 방법을 모색해 끝을 보는 편입니다. "</MsgBox>
    </Container>
  );
};

export default GreetingMsg;
