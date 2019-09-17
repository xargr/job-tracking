import styled from 'styled-components';

const ContainerJobContain = styled.div`
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1em;
  background-color: #f2f5fa;
  padding: 2em 0;
  min-height: 100vh;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-column-gap: 0;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export default ContainerJobContain;
