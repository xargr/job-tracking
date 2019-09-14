import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import 'reset-css';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 10vh 90vh;
  grid-row-gap: 1em;
`;

const Page = ({ children }) => {
  return (
    <Container>
      <Meta />
      <Header />
      {children}
    </Container>
  );
};

export default Page;
