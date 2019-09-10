import React, { useState, useEffect, useRef } from 'react';
import data from '../../lib/data';
import dragAndDrop from '../../lib/dragAndDrop';

const JobContext = React.createContext();

const JobContextProvider = ({ children }) => {
  const [state, setState] = useState();

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const initialState = JSON.parse(localStorage.getItem('data')) || data;
      setState(initialState);
    } else {
      localStorage.setItem('data', JSON.stringify(state));
    }
  });

  const onDragEnd = result => dragAndDrop(result, state, setState);

  const modalTrigger = columnId => {
    setState({ ...state, isModalOpen: !state.isModalOpen, columnId });
  };

  return (
    <JobContext.Provider value={{ ...state, onDragEnd, modalTrigger }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
export { JobContext };
