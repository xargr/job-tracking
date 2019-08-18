import React from 'react';

const JobList = ({ title }) => (
  <div className="jobList">
    <div className="jobItem">
      <div className="job__title">Appilio</div>
      <div className="job__position">Front-end dev</div>
      <div className="job__time__ago">5 minutes ago</div>
    </div>
    <div className="jobItem">
      <div className="job__title">Appilio</div>
      <div className="job__position">Front-end dev</div>
      <div className="job__time__ago">5 minutes ago</div>
    </div>
  </div>
);

export default JobList;
