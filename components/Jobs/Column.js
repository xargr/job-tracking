import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Job from './Job';

const Container = styled.div`
  border: 1px solid lightgrey;
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
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
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

class Column extends React.PureComponent {
  render() {
    return (
      <Container>
        <H3>
          <span>{this.props.jobs.length}</span>
          {this.props.column.title}
        </H3>
        <Center>
          <Button>&#43; Add job</Button>
        </Center>
        <Droppable
          droppableId={this.props.column.id}
          key={this.props.column.id}
          index={this.props.index}
        >
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
