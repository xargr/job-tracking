import React, { useContext } from 'react';
import { HeaderButton } from '../Styled/HeaderButton';
import { JobContext } from '../context/JobContext';
import toJson from '../../lib/toJson';

const Export = () => {
  const context = useContext(JobContext);

  return (
    <HeaderButton onClick={() => toJson(context)}>Export JSON</HeaderButton>
  );
};

export default Export;
