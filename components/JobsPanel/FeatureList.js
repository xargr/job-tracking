import React from 'react';
import JobList from './JobList';

const FeatureList = ({ title, clickAddJob }) => (
  <div className={title + ' aux'}>
    <h3>
      <span className="counter">2</span> {title}
    </h3>
    <div onClick={() => clickAddJob(title)} className="add_new">&#43; Add job</div>
    <JobList />
  </div>
);
export default FeatureList;
