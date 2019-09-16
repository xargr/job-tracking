import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    company: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.number
  }).isRequired,
  columnId: PropTypes.string,
  index: PropTypes.number
};

export default Job;
