import React, { useState, useEffect, useRef } from 'react';
import uuidv4 from 'uuid/v4';
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
    const colId = columnId || null;

    setState({
      ...state,
      isModalOpen: !state.isModalOpen,
      modalData: { columnId: colId }
    });
  };

  const modalSubmit = objValues => {
    const { company, position } = objValues;

    const uniqId = uuidv4();

    const newJob = {
      id: uniqId,
      company,
      position,
      date: Date.now()
    };

    const newJobs = Object.assign({}, state.jobs);
    newJobs[uniqId] = {
      ...newJob
    };

    const colId = state.modalData.columnId;
    const newColumns = Object.assign({}, state.columns);
    const oldColumn = newColumns[colId];

    newColumns[colId] = {
      ...oldColumn,
      jobs: [...oldColumn.jobs, uniqId]
    };

    const newState = {
      ...state,
      columns: newColumns,
      jobs: newJobs,
      isModalOpen: !state.isModalOpen,
      modalData: { columnId: null, company: '', position: '' }
    };

    setState(newState);
  };

  return (
    <JobContext.Provider
      value={{ ...state, onDragEnd, modalTrigger, modalSubmit }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
export { JobContext };
