import React, { useState } from 'react';

const ModalForm = ({ handleData }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');

  const submitData = e => {
    e.preventDefault();

    if (company.trim() && position.trim()) {
      const data = Object.assign(
        {},
        {
          company,
          position,
          date: Date.now()
        }
      );

      handleData(data);
    }
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__title">Add a job</div>
        <div className="modal__form">
          <label htmlFor="company">Company</label>
          <input
            className="company__input"
            onChange={e => setCompany(e.target.value)}
          />
          <label htmlFor="position">Position</label>
          <input
            className="position__input"
            onChange={e => setPosition(e.target.value)}
          />
          <button onClick={submitData} className="addButton">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
