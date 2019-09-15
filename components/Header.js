import React, { useContext } from 'react';
import styled from 'styled-components';
import { JobContext } from './context/JobContext';
import Export from './Button/Export';
import DeleteAll from './Button/DeleteAll';
import Import from './Button/Import';

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

const LeftSide = styled.div`
  width: 50%;
  float: left;
`;

const RightSide = styled.div`
  width: 50%;
  float: right;
  text-align: right;
  margin-top: 30px;
`;

const Header = () => {
  const { jobs } = useContext(JobContext);
  const jobsCount = jobs && Object.keys(jobs).length;

  return (
    <Container>
      <LeftSide>
        <H1>Job Tracking</H1>
        <Span>
          Stay organized by tracking the companies and jobs you are applying to.{' '}
        </Span>
      </LeftSide>
      <RightSide>
        <Import />
        {jobsCount > 0 && (
          <>
            <DeleteAll />
            <Export />
          </>
        )}
      </RightSide>
    </Container>
  );
};
export default Header;
