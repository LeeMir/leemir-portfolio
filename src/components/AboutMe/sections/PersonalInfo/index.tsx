import React from 'react';
import MsgBox from '../../MsgBox';
import { Container } from '../style';

const PersonalInfo = () => {
  return (
    <Container>
      <MsgBox>이름: {process.env.REACT_APP_MY_NAME}</MsgBox>
      <MsgBox>생년월일: {process.env.REACT_APP_MY_BIRTH}</MsgBox>
      <MsgBox>이메일: {process.env.REACT_APP_MY_EMAIL}</MsgBox>
      <MsgBox>전화번호: {process.env.REACT_APP_MY_PHONE}</MsgBox>
      <MsgBox>
        학력: <br />
        - 서울시립대학교 컴퓨터과학부 재학 (2017.03 ~) <br />
        &nbsp;&nbsp;&nbsp;&nbsp;- 2023.08 졸업 예정 <br />
        - 서울 원묵고등학교 졸업 (2017.02) <br />
      </MsgBox>
      <MsgBox>
        병역사항: 육군 병장 만기 전역 (2019.05 ~ 2020.12)
      </MsgBox>
    </Container>
  );
};

export default PersonalInfo;
