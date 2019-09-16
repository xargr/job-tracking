import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import isModalValid from '../lib/isModalValid';
import { JobContext } from './context/JobContext';
import {
  Overlay,
  ContainerModalForm,
  Close,
  Pointer,
  H4,
  Label,
  Input,
  ButtonSave,
  ButtonDelete
} from './Styled/StyleModalForm';

const ModalForm = () => {
  const { modalData, modalTrigger, modalSubmit, deleteSubmit } = useContext(
    JobContext
  );

  const [state, setState] = useState({
    ...modalData
  });

  const [isValid, setIsValid] = useState(false);

  const node = useRef();

  const handleClick = useCallback(e => {
    if (node.current && !node.current.contains(e.target)) {
      modalTrigger(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleForm = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });

    isModalValid(state, setIsValid);
  };

  const handleSubmit = e => {
    e.preventDefault();
    modalSubmit(state);
  };

  const handleDelete = (e, jobId, columnId) => {
    e.preventDefault();
    deleteSubmit(jobId, columnId);
  };

  return (
    <Overlay>
      <ContainerModalForm ref={node}>
        <Close>
          <Pointer onClick={() => modalTrigger(null)}>&#9747;</Pointer>
        </Close>
        {state.jobId ? <H4>Update Job</H4> : <H4>Add Job</H4>}
        <Label htmlFor="company">Company</Label>
        <Input
          name="company"
          value={state.company}
          autoComplete="off"
          onChange={e => handleForm(e)}
        />
        <Label htmlFor="position">Position</Label>
        <Input
          name="position"
          value={state.position}
          autoComplete="off"
          onChange={e => handleForm(e)}
        />
        {state.jobId ? (
          <ButtonSave disabled={!isValid} onClick={e => handleSubmit(e)}>
            Update
          </ButtonSave>
        ) : (
          <ButtonSave disabled={!isValid} onClick={e => handleSubmit(e)}>
            Save
          </ButtonSave>
        )}

        {state.jobId && (
          <ButtonDelete
            onClick={e => handleDelete(e, state.jobId, state.columnId)}
          >
            Delete
          </ButtonDelete>
        )}
      </ContainerModalForm>
    </Overlay>
  );
};

export default ModalForm;
