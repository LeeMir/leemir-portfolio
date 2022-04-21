import * as React from 'react';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Section>A</Section>
      <Section>B</Section>
      <Section>C</Section>
    </Layout>
  )
}

export default IndexPage
