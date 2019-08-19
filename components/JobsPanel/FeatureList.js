import React from 'react';
import JobList from './JobList';

const FeatureList = ({ title, clickAddJob, data }) => (
  <div className={title + ' aux'}>
    <h3>
      <span className="counter">{data && data.length || 0}</span> {title}
    </h3>
    <div onClick={() => clickAddJob(title)} className="add_new">&#43; Add job</div>
    <JobList data={data} />
  </div>
);
export default FeatureList;
