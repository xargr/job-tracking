import React, { useState } from 'react';

const EditModalForm = ({
  updateItem,
  handleEditModalData,
  updateIndex,
  updateColumn,
  deletetData
}) => {
  const [company, setCompany] = useState(updateItem.company);
  const [position, setPosition] = useState(updateItem.position);

  const submitData = e => {
    e.preventDefault();

    if (company.trim() && position.trim()) {
      const data = Object.assign(
        {},
        {
          company: company.trim(),
          position: position.trim(),
          date: Date.now()
        }
      );

      handleEditModalData(data, updateIndex, updateColumn);
    }
  };

  const handleDelete = () => {
    deletetData(updateColumn, updateIndex);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__title">Update</div>
        <div className="modal__form">
          <label htmlFor="company">Company</label>
          <input
            className="company__input"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
          <label htmlFor="position">Position</label>
          <input
            className="position__input"
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
          <button onClick={submitData} className="addButton">
            Update
          </button>
          <button onClick={handleDelete} className="delButton">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EditModalForm;
