import React from 'react';
import JobList from './JobList';

const FeatureList = ({ title }) => (
  <div className={title + ' aux'}>
    <h3>
      <span className="counter">2</span> {title}
    </h3>
    <div className="add_new">&#43; Add job</div>
    <JobList />
  </div>
);
export default FeatureList;
