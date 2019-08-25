import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Job from './Job';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin: 8px;
`;
const Title = styled.h3`
  padding: 8px;
  font-size: 1.35em;
  font-weight: 700;
`;
const JobList = styled.div`
  padding: 8px;
`;

class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <JobList
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {this.props.jobs.map((job, index) => (
                <Job key={index} job={job} index={index} />
              ))}
              {provided.placeholder}
            </JobList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;

// <JobList>
//   {this.props.tasks.map((job, index) => (
//     <Job
//       job={job}
//       key={job.id}
//       index={index}
//       innerRef={provided.innerRef}
//       {...provided.draggableProps}
//       {...provided.dragHandleProps}
//     />
//   ))}
//   {provided.placeholder}
// </JobList>;
