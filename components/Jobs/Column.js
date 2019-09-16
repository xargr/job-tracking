import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Job from './Job';
import {
  ContainerColumn,
  H3,
  Center,
  Button,
  JobList
} from '../Styled/StyleColumn';

const Column = ({ jobs, column, index, modalTrigger }) => (
  <Droppable droppableId={column.id} key={column.id} index={index}>
    {(provided, snapshot) => (
      <ContainerColumn isDraggingOver={snapshot.isDraggingOver}>
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
      </ContainerColumn>
    )}
  </Droppable>
);

export default Column;
