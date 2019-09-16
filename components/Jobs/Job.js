import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';
import { JobContext } from '../context/JobContext';
import { ContainerJob, Company, Position, Ago } from '../Styled/StyleJob';

const Job = ({ job, index, columnId }) => {
  const { editModal } = useContext(JobContext);

  return (
    <Draggable draggableId={job.id} key={job.id} index={index}>
      {(provided, snapshot) => (
        <ContainerJob
          onDoubleClick={() => editModal(job, columnId)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <Company>{job.company}</Company>
          <Position>{job.position}</Position>
          <Ago>{moment(job.date).fromNow()}</Ago>
        </ContainerJob>
      )}
    </Draggable>
  );
};

export default Job;
