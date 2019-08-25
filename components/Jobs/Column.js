import React from 'react';
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
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

class Column extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} key={this.props.column.id} index={this.props.index}>
          {(provided, snapshot) => (
            <JobList
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
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
