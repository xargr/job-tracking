import styled from 'styled-components';

export const ContainerHeader = styled.div`
  grid-row: header;
  padding: 2em;

  @media (max-width: 767px) {
    padding: 1em;
  }
`;

export const H1 = styled.h1`
  font-size: 2.3em;
  font-weight: 700;
  margin-bottom: 0.25em;
  font-family: 'Red Hat Text', sans-serif;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2em;
  }

  @media (max-width: 767px) {
    font-size: 2em;
  }
`;

export const Span = styled.span`
  font-style: italic;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.85em;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  float: left;
`;

export const RightSide = styled.div`
  width: 50%;
  float: right;
  text-align: right;
  margin-top: 30px;
`;
