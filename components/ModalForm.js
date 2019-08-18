import React from 'react';

const ModalForm = () => (
  <>
    <div className="overlay"></div>
    <div className="modal">
      <div className="modal__title">Add a job</div>
      <div className="modal__form">
        <label htmlFor="company">Company</label>
        <input className="company__input" name="company" />
        <label htmlFor="position">Position</label>
        <input className="position__input" name="position" />
        <button className="addButton">Add</button>
      </div>
    </div>
  </>
);

export default ModalForm;
