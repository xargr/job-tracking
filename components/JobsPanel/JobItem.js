import React, { useEffect } from 'react';
import moment from 'moment';

const JobItem = ({ updateItem, item, index, column, fromDrag, toDrop }) => {
  const elem = React.useRef();

  useEffect(() => {
    elem.current.addEventListener('dragstart', event => {
      elem.current.className += ' hold';
      setTimeout(() => (elem.current.className = 'invisible'), 0);
      fromDrag(column, index);
    });

    elem.current.addEventListener('dragend', event => {
      //if (elem.current.className === 'invisible') {
      //elem.current.className = 'jobItem';
      //}
    });

    //elem.current.addEventListener('dragenter', event => {});

    elem.current.addEventListener('dragover', event => {
      event.preventDefault(event);
    });

    //elem.current.addEventListener('dragleave', event => {});

    elem.current.addEventListener('drop', event => {
      toDrop(column, index);
    });

    return () => {
      elem.current.removeEventListener('dragstart', () => {});
      elem.current.removeEventListener('dragend', () => {});
      //elem.current.removeEventListener('dragenter', () => {});
      elem.current.removeEventListener('dragover', () => {});
      //elem.current.removeEventListener('dragleave', () => {});
      elem.current.removeEventListener('drop', () => {});
    };
  });

  return (
    <div
      className="jobItem"
      onDoubleClick={() => updateItem(column, item, index)}
      draggable="true"
      ref={elem}
    >
      <div className="job__title">{item.company}</div>
      <div className="job__position">{item.position}</div>
      <div className="job__time__ago">{moment(item.date).fromNow()}</div>
    </div>
  );
};

export default JobItem;
