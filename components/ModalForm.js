import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import styled from 'styled-components';
import isModalValid from '../lib/isModalValid';
import { JobContext } from './context/JobContext';

const Overlay = styled.div`
  background-color: rgba(51, 41, 41, 0.65);
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 10;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  width: 360px;
  height: auto;
  position: absolute;
  background: #fff;
  top: calc(50% - 160px);
  left: calc(50% - 180px);
  border-radius: 5px;
  padding: 1em;
`;

const Close = styled.div`
  margin: 10px 0;
  text-align: right;
  font-size: 1.5em;
  height: 30px;
  width: 100%;
  float: right;
  line-height: 30px;
  font-weight: 700;
`;

const Pointer = styled.div`
  width: 30px;
  height: 30px;
  float: right;
  text-align: center;
  cursor: pointer;
`;

const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.2em;
  font-family: sans-serif;
  margin: 0px 0px 20px 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: 'Red Hat Text', sans-serif;
  color: rgb(152, 161, 179);
  margin: 0px 0px 10px 15px;
`;

const Input = styled.input`
  display: block;
  height: 30px;
  width: 90%;
  margin: 0 auto 10px;
  border: none;
  background-color: rgb(242, 245, 250);
  border-radius: 0px;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(33, 150, 243);
  }
`;

const Button = styled.button`
  margin: 20px;
  float: right;
  width: 75px;
  height: 35px;
  cursor: pointer;
  background-color: rgb(22, 138, 230);
  outline: none;
  border: 1px solid rgb(22, 138, 230);
  border-radius: 2px;
  color: #fff;
  font-weight: 700;
  font-size: 1em;
`;

const ModalForm = () => {
  const { modalData, modalTrigger, modalSubmit } = useContext(JobContext);

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

  return (
    <Overlay>
      <Container ref={node}>
        <Close>
          <Pointer onClick={() => modalTrigger(null)}>&#9747;</Pointer>
        </Close>
        <H4>Add Job</H4>
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
        <Button disabled={!isValid} onClick={e => handleSubmit(e)}>
          Save
        </Button>
      </Container>
    </Overlay>
  );
};

export default ModalForm;