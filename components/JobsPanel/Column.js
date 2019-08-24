import React from 'react';
import List from './List';

const Column = ({ column, clickAddJob, data, updateItem }) => (
  <div className={column + ' aux'}>
    <h3>
      <span className="counter">{data && data.length || 0}</span> {column}
    </h3>
    <div onClick={() => clickAddJob(column)} className="add_new">&#43; Add job</div>
    <List data={data} updateItem={updateItem} column={column} />
  </div>
);
export default Column;
