import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';
import { JobContext } from '../context/JobContext';
import ModalForm from '../ModalForm';

const Container = styled.div`
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1em;
  background-color: #f2f5fa;
  padding: 2em 0;
`;

const JobsContainer = () => {
  const {
    columnOrder,
    columns,
    jobs,
    onDragEnd,
    modalTrigger,
    isModalOpen,
  } = useContext(JobContext);

  return (
    <Container>
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
    </Container>
  );
};

export default JobsContainer;
