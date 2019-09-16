import React from 'react';
import PropTypes from 'prop-types';
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
            jobs.map((job, i) => (
              <Job key={job.id} job={job} index={i} columnId={column.id} />
            ))}
          {provided.placeholder}
        </JobList>
      </ContainerColumn>
    )}
  </Droppable>
);

Column.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      company: PropTypes.string,
      position: PropTypes.string,
      date: PropTypes.number
    })
  ),
  column: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    jobs: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number.isRequired,
  modalTrigger: PropTypes.func.isRequired
};

export default Column;
