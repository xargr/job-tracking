import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Job from './Job';

const Container = styled.div`
  border-radius: 2px;
  padding: 1em;
`;
const H3 = styled.h3`
  padding: 8px;
  font-size: 1.15em;
  font-weight: 700;
  text-align: center;
  font-family: 'Red Hat Text', sans-serif;

  span {
    background: #dde3f0;
    padding: 0px 7px;
    margin-right: 5px;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    line-height: 10px;
    text-align: center;
    font-size: 0.8em;
    font-weight: 400;
  }
`;
const JobList = styled.div`
  padding: 8px;
  min-height: 60vh;
  overflow-y: auto;
  height: 60vh;
  border: ${props => (props.isDraggingOver ? '1px dotted grey' : 'none')};
`;

const Center = styled.div`
  text-align: center;
`;

const Button = styled.button`
  color: #2696f3;
  border: 1px dashed #2696f3;
  background-color: transparent;
  margin: 1em;
  padding: 0.75em 1.5em;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #2696f3;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const Column = ({ jobs, column, index, modalTrigger }) => (
  <Droppable droppableId={column.id} key={column.id} index={index}>
    {(provided, snapshot) => (
      <Container isDraggingOver={snapshot.isDraggingOver}>
        <H3>
          <span>{jobs.length}</span>
          {column.title}
        </H3>
        <Center>
          <Button onClick={() => modalTrigger(column.id)}>&#43; Add job</Button>
        </Center>

        <JobList
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {jobs &&
            jobs.map((job, index) => (
              <Job key={index} job={job} index={index} columnId={column.id} />
            ))}
          {provided.placeholder}
        </JobList>
      </Container>
    )}
  </Droppable>
);

export default Column;
