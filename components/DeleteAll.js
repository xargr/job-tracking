import React, { useContext } from 'react';
import HeaderButton from './Styled/HeaderButton';
import { JobContext } from './context/JobContext';

const DeleteAll = () => {
  const { deleteAll } = useContext(JobContext);

  return <HeaderButton onClick={() => deleteAll()}>Delete All</HeaderButton>;
};

export default DeleteAll;
