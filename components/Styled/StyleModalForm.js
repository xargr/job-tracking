import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(51, 41, 41, 0.65);
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 10;
  top: 0;
  left: 0;
`;
export const ContainerModalForm = styled.div`
  width: 360px;
  height: auto;
  position: absolute;
  background: #fff;
  top: calc(50% - 160px);
  left: calc(50% - 180px);
  border-radius: 5px;
  padding: 1em;
`;

export const Close = styled.div`
  margin: 10px 0;
  text-align: right;
  font-size: 1.5em;
  height: 30px;
  width: 100%;
  float: right;
  line-height: 30px;
  font-weight: 700;
`;

export const Pointer = styled.div`
  width: 30px;
  height: 30px;
  float: right;
  text-align: center;
  cursor: pointer;
`;

export const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.2em;
  font-family: sans-serif;
  margin: 0px 0px 20px 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: 'Red Hat Text', sans-serif;
  color: rgb(152, 161, 179);
  margin: 0px 0px 10px 15px;
`;

export const Input = styled.input`
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

export const ButtonSave = styled.button`
  margin: 20px 0;
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

export const ButtonDelete = styled.button`
  margin: 20px 10px 0px 0px;
  float: right;
  width: 75px;
  height: 35px;
  cursor: pointer;
  background-color: rgba(230, 22, 32, 0.85);
  outline: none;
  border: 1px solid rgba(230, 22, 32, 0.85);
  border-radius: 2px;
  color: #fff;
  font-weight: 700;
  font-size: 1em;
`;
