export default (result, state, setState) => {
  const { destination, source, draggableId } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId];

  if (start === finish) {
    const newJobIds = Array.from(start.jobs);

    newJobIds.splice(source.index, 1);
    newJobIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      jobs: newJobIds
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    };

    setState(newState);
    return;
  }

  const startJobIds = Array.from(start.jobs);
  startJobIds.splice(source.index, 1);

  const newStart = {
    ...start,
    jobs: startJobIds
  };

  const finishJobIds = Array.from(finish.jobs);
  finishJobIds.splice(destination.index, 0, draggableId);

  const newFinish = {
    ...finish,
    jobs: finishJobIds
  };

  const oldState = Object.assign({}, state);
  const oldJobs = oldState.jobs;
  const updatedDateJob = { ...oldJobs[draggableId], date: Date.now() };

  const newState = {
    ...state,
    jobs: {
      ...oldJobs,
      [draggableId]: { ...updatedDateJob }
    },
    columns: {
      ...state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    }
  };

  setState(newState);
};
