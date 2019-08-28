import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: header;
  padding: 2em;
`;

const H1 = styled.h1`
  font-size: 2.3em;
  font-weight: 700;
  margin-bottom: 0.25em;
  font-family: 'Red Hat Text', sans-serif;
`;

const Span = styled.span`
  font-style: italic;
`;

const Header = () => (
  <Container>
    <H1>Job Tracking</H1>
    <Span>
      Stay organized by tracking the companies and jobs you are applying to.{' '}
    </Span>
  </Container>
);
export default Header;
