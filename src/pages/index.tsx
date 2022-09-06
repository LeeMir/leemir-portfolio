import * as React from 'react';
import { RecoilRoot } from 'recoil';
import AboutMe from '../components/AboutMe';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Minimap from '../components/Minimap';
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Intro />
        <Section>B</Section>
        <AboutMe />
        <Section>C</Section>
      </Layout>
      <Minimap />
    </RecoilRoot>
  )
}

export default IndexPage
