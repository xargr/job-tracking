import React, { useContext } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';
import { JobContext } from '../context/JobContext';

const Container = styled.div`
  border-radius: 2px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  font-family: 'Red Hat Text', sans-serif;
  &: focus {
    border: none;
  }
`;

const Company = styled.div``;
const Position = styled.div`
  font-size: 0.9em;
  margin-top: 8px;
`;
const Ago = styled.div`
  font-size: 0.85em;
  margin-top: 20px;
  text-align: right;
`;

const Job = ({ job, index, columnId }) => {
  const { editModal } = useContext(JobContext);

  return (
    <Draggable draggableId={job.id} key={job.id} index={index}>
      {(provided, snapshot) => (
        <Container
          onDoubleClick={() => editModal(job, columnId)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <Company>{job.company}</Company>
          <Position>{job.position}</Position>
          <Ago>{moment(job.date).fromNow()}</Ago>
        </Container>
      )}
    </Draggable>
  );
};

export default Job;
