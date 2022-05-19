import React from 'react';
import MsgBox from '../../MsgBox';
import { Container } from '../style';

const GreetingMsg = () => {
  return (
    <Container>
      <MsgBox>"안녕하세요! 프론트엔드 개발자를 꿈꾸는 이명재입니다."</MsgBox>
      <MsgBox>"일상생활에서 일어나는 일에 관심이 많으며, 그로부터 주로 아이디어를 얻습니다."</MsgBox>
      <MsgBox>"UX와 Clean Code를 항상 고려하는 습관을 가지려 노력하고 있습니다."</MsgBox>
      <MsgBox>"최근 직접 갈아 내리는 커피 한 잔의 즐거움을 느끼고 있습니다."</MsgBox>
      <MsgBox>"끝이 보이지 않는 개발의 길 위에서 차근차근 걸어가는 중입니다."</MsgBox>
    </Container>
  );
};

export default GreetingMsg;
