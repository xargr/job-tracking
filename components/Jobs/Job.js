import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const Job = ({ job, index }) => {
  return (
    <Draggable draggableId={job.id} key={job.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {job.company}
        </Container>
      )}
    </Draggable>
  );
};

export default Job;
