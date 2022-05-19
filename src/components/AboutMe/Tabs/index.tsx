import React from 'react';
import { Highlight, Wrapper, TabContainer } from './style';

interface TabValue {
  name: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Tab = ({ name, active, onClick }: TabValue ) => {
  return (
    <Wrapper name={name} onClick={onClick}>
      {
        active &&
        <Highlight>
          {name}
        </Highlight>
      }
      {
        !active &&
        name
      }
    </Wrapper>
  );
};

const Tabs = ({ tab, tabHandler }: { tab: string, tabHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => {
  return (
    <TabContainer>
      <Tab name='소개글' active={tab==='소개글'} onClick={tabHandler} />
      <Tab name='인적사항' active={tab==='인적사항'} onClick={tabHandler} />
      <Tab name='동료평가' active={tab==='동료평가'} onClick={tabHandler} />
    </TabContainer>
  );
};

export default Tabs;
