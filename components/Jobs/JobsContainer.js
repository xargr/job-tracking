import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { JobContext } from '../context/JobContext';
import ModalForm from '../ModalForm';
import ContainerJobContain from '../Styled/StyleJobContainer';

const JobsContainer = () => {
  const {
    columnOrder,
    columns,
    jobs,
    onDragEnd,
    modalTrigger,
    isModalOpen
  } = useContext(JobContext);

  return (
    <ContainerJobContain>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnOrder &&
          columnOrder.map((columnId, index) => {
            const column = columns[columnId];
            const jobsList = column.jobs.map(jobId => jobs[jobId]);

            return (
              <Column
                key={column.id}
                column={column}
                jobs={jobsList}
                index={index}
                modalTrigger={modalTrigger}
              />
            );
          })}
      </DragDropContext>
      {isModalOpen && <ModalForm />}
    </ContainerJobContain>
  );
};

export default JobsContainer;
