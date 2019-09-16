import React, { useContext } from 'react';
import { JobContext } from './context/JobContext';
import Export from './Button/Export';
import DeleteAll from './Button/DeleteAll';
import Import from './Button/Import';
import {
  ContainerHeader,
  H1,
  Span,
  LeftSide,
  RightSide
} from './Styled/StyleHeader';

const Header = () => {
  const { jobs } = useContext(JobContext);
  const jobsCount = jobs && Object.keys(jobs).length;

  return (
    <ContainerHeader>
      <LeftSide>
        <H1>Job Tracking</H1>
        <Span>
          Stay organized by tracking the companies and jobs you are applying to.
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
    </ContainerHeader>
  );
};
export default Header;
