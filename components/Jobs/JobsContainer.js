import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import data from '../../lib/data';
import Column from './Column';

const Container = styled.div`
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1em;
  background-color: #f2f5fa;
  padding: 2em 0;
`;

class JobsContainer extends React.PureComponent {
  state = {};

  componentDidMount() {
    this._loadData();
  }

  _loadData = () => {
    if (window) {
      const local = JSON.parse(localStorage.getItem('data'));

      if (local) {
        this.setState({ ...local });
        return;
      }
    }

    this.setState({ ...data });
  };

  _saveToStorage = state => {
    if (window) {
      this.setState({ ...state }, () => {
        localStorage.setItem('data', JSON.stringify(state));
      });
    }
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newJobIds = Array.from(start.jobs);
      newJobIds.splice(source.index, 1);
      newJobIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        jobs: newJobIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this._saveToStorage(newState);
      return;
    }

    const startJobIds = Array.from(start.jobs);
    startJobIds.splice(source.index, 1);

    const newStart = {
      ...start,
      jobs: startJobIds
    };

    const finishJobIds = Array.from(finish.jobs);
    finishJobIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      jobs: finishJobIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    this._saveToStorage(newState);
  };

  render() {
    if (!this.state.columns) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const jobs = column.jobs.map(jobId => this.state.jobs[jobId]);

            return (
              <Column
                key={column.id}
                column={column}
                jobs={jobs}
                index={index}
              />
            );
          })}
        </DragDropContext>
      </Container>
    );
  }
}

export default JobsContainer;
