import styled from 'styled-components';

export const ContainerColumn = styled.div`
  border-radius: 2px;
  padding: 1em;
`;

export const H3 = styled.h3`
  padding: 8px;
  font-size: 1.15em;
  font-weight: 700;
  text-align: center;
  font-family: 'Red Hat Text', sans-serif;

  span {
    background: #dde3f0;
    padding: 0px 7px;
    margin-right: 5px;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    line-height: 10px;
    text-align: center;
    font-size: 0.8em;
    font-weight: 400;
  }
`;

export const Center = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  color: #2696f3;
  border: 1px dashed #2696f3;
  background-color: transparent;
  margin: 1em;
  padding: 0.75em 1.5em;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #2696f3;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    padding: 5px 4px;
    font-size: 0.8em;
  }
`;

export const JobList = styled.div`
  padding: 8px;
  min-height: 60vh;
  overflow-y: auto;
  height: 60vh;
  border: ${props => (props.isDraggingOver ? '1px dotted grey' : 'none')};

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;
