import React from 'react';
import moment from 'moment';

const JobList = ({ title, data }) => (
  <>
    {data && data.length > 0 && (
      <div className="jobList">
        {data.map((item, index) => (
          <div key={index} className="jobItem">
            <div className="job__title">{item.company}</div>
            <div className="job__position">{item.position}</div>
            <div className="job__time__ago">{ moment(item.date).fromNow() }</div>
          </div>
        ))}
      </div>
    )}
  </>
);

export default JobList;
