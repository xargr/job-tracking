import React, { useContext, useRef } from 'react';
import { HeaderButton } from '../Styled/HeaderButton';
import { JobContext } from '../context/JobContext';

const Import = () => {
  const inputRef = useRef();
  const { uploadData } = useContext(JobContext);

  const handleClick = e => {
    e.preventDefault();

    inputRef.current.click();
  };

  const handleOnChange = e => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: 'application/json' });
    const fileRead = new FileReader();

    fileRead.onload = e => {
      uploadData(JSON.parse(e.target.result));
    };

    fileRead.readAsText(blob);
  };

  return (
    <>
      <input
        ref={inputRef}
        accept=".json"
        type="file"
        style={{ display: 'none' }}
        onChange={e => handleOnChange(e)}
      />
      <HeaderButton onClick={e => handleClick(e)}>Import JSON</HeaderButton>
    </>
  );
};

export default Import;
