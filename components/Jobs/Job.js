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

class Job extends React.PureComponent {
  render() {
    return (
      <Draggable
        draggableId={this.props.job.id}
        key={this.props.job.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            {this.props.job.company}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Job;
