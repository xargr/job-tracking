import React from 'react';
import JobList from './JobList';

const FeatureList = ({ column, clickAddJob, data, updateItem }) => (
  <div className={column + ' aux'}>
    <h3>
      <span className="counter">{data && data.length || 0}</span> {column}
    </h3>
    <div onClick={() => clickAddJob(column)} className="add_new">&#43; Add job</div>
    <JobList data={data} updateItem={updateItem} column={column} />
  </div>
);
export default FeatureList;
