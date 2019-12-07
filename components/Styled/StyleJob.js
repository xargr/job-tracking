import styled from 'styled-components';

export const ContainerJob = styled.div`
  border-radius: 2px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  font-family: 'Red Hat Text', sans-serif;
  &: focus {
    border: none;
  }
`;

export const Company = styled.div``;

export const Position = styled.div`
  font-size: 0.9em;
  margin-top: 8px;
  overflow: hidden;
`;
export const Ago = styled.div`
  font-size: 0.85em;
  margin-top: 20px;
  text-align: right;
`;
