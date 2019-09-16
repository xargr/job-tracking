import styled from 'styled-components';

const ContainerPage = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 10vh 90vh;
  grid-row-gap: 1em;
`;

export default ContainerPage;
