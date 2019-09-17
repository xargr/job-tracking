import styled from 'styled-components';

const ContainerPage = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 15vh 85vh;
  grid-row-gap: 1em;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-rows: 20vh 80vh;
    grid-row-gap: 1em;
  }

  @media (max-width: 767px) {
    grid-template-rows: 20vh 80vh;
    grid-row-gap: 1em;
  }
`;

export default ContainerPage;
