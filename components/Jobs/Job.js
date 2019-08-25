import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: white;
`;

class Job extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.job.id} index={this.props.index}>
        {provided => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.job.company}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Job;
