import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil';

import GlobalStyle from './src/styles/global';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <RecoilRoot>
      {element}
      <GlobalStyle />
    </RecoilRoot>
  )
};
