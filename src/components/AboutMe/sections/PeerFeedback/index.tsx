import React from 'react';
import MsgBox from '../../MsgBox';
import { Container, SubTitle } from '../style';

const PeerFeedback = () => {
  return (
    <Container>
      <SubTitle>
        같이 프로젝트를 한 동료들의 저에 대한 평가입니다. <br />
        #완성도 #꼼꼼함 #주도적 업무처리 #몰입 #열정 #책임감
      </SubTitle>
      <MsgBox>
        " 완성도, 꼼꼼함, 주도적 업무처리, 전부 명재님한테 잘 어울리는 키워드 같습니다. 생각지도 못한 문제들을 발견하시고, 간단하게(?) 문제에 대한 해답을 찾아내시는 모습을 보고 속으로 감탄한 적이 많습니다. 같이 프로젝트를 진행하면서, '명재님 같은 팀원을 또 만날 수 있을까'라는 생각을 많이 했었네요. "
      </MsgBox>
      <MsgBox>" 프론트엔드 개발자를 지망하는 사람답게 픽셀 단위의 꼼꼼함(?)을 갖고 계셔서 인식하지 못하였던 부분을 찾아주십니다. 그리고 자신이 개발한 코드에 계속해서 개선하고자 하는 의지가 돋보였고, 몰입하여 개선 결과도 좋았습니다. "</MsgBox>
      <MsgBox>" 새로운 것을 시도하는 것에 적극적이고 항상 좋은 퀄리티를 추구함 "</MsgBox>
    </Container>
  );
};

export default PeerFeedback;
