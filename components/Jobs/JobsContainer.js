import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import data from '../../lib/data';
import Column from './Column';

class JobsContainer extends React.Component {
  state = data;

  onDragEnd = result => {
    console.log(result);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId, index) => {
          const column = this.state.columns[columnId];
          const jobs = column.jobs.map(jobId => this.state.jobs[jobId]);

          return <Column key={column.id} column={column} jobs={jobs} />;
        })}
      </DragDropContext>
    );
  }
}

export default JobsContainer;
