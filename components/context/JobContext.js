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

  const modalTrigger = data => {
    setState({
      ...state,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: data,
        company: '',
        position: '',
        jobId: null
      }
    });
  };

  const modalSubmit = modalValues => {
    const { company, position, columnId, jobId } = modalValues;

    if (jobId) {
      const newJobs = {
        ...state.jobs,
        [jobId]: {
          ...state.jobs[jobId],
          company,
          position,
          date: Date.now()
        }
      };

      const newState = {
        ...state,
        jobs: newJobs,
        isModalOpen: !state.isModalOpen,
        modalData: {
          columnId: null,
          company: '',
          position: '',
          jobId: null
        }
      };

      setState(newState);
      return;
    }

    const uniqId = uuidv4();

    const newJob = {
      id: uniqId,
      company,
      position,
      date: Date.now()
    };

    const newJobs = {
      ...state.jobs,
      [uniqId]: newJob
    };

    const selectedColumn = state.columns[columnId];

    const newColumns = {
      ...state.columns,
      [columnId]: {
        ...selectedColumn,
        jobs: [...selectedColumn.jobs, uniqId]
      }
    };

    const newState = {
      ...state,
      jobs: newJobs,
      columns: newColumns,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: null,
        company: '',
        position: '',
        jobId: null
      }
    };

    setState(newState);
  };

  const editModal = (job, columnId) => {
    const { company, position, id } = job;

    const newState = {
      ...state,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: columnId,
        company,
        position,
        jobId: id
      }
    };

    setState(newState);
  };

  const deleteSubmit = (jobId, columnId) => {
    const oldState = Object.assign({}, state);

    delete oldState.jobs[jobId];

    const newColumnJobs = oldState.columns[columnId].jobs.filter(
      el => el !== jobId
    );

    oldState.columns[columnId].jobs = [...newColumnJobs];

    const newState = {
      ...oldState,
      isModalOpen: !state.isModalOpen
    };

    setState(newState);
  };

  return (
    <JobContext.Provider
      value={{
        ...state,
        onDragEnd,
        modalTrigger,
        modalSubmit,
        editModal,
        deleteSubmit
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
export { JobContext };
