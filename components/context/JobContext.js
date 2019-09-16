import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
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
      const initialState =
        JSON.parse(window.localStorage.getItem('data')) || data;
      setState(initialState);
    } else {
      window.localStorage.setItem('data', JSON.stringify(state));
    }
  });

  const onDragEnd = result => dragAndDrop(result, state, setState);

  const modalTrigger = columnId => {
    setState({
      ...state,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId,
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
        columnId,
        company,
        position,
        jobId: id
      }
    };

    setState(newState);
  };

  const deleteSubmit = (jobId, columnId) => {
    const oldState = { ...state };

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

  const deleteAll = () => {
    // eslint-disable-next-line no-alert
    window.confirm('Are you sure to delete all records?');

    setState(data);
  };

  const uploadData = cxt => {
    setState(cxt);
  };

  return (
    <JobContext.Provider
      value={{
        ...state,
        onDragEnd,
        modalTrigger,
        modalSubmit,
        editModal,
        deleteSubmit,
        deleteAll,
        uploadData
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

JobContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default JobContextProvider;
export { JobContext };
