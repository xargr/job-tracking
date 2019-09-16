import React from 'react';
import Meta from './Meta';
import Header from './Header';
import { ContainerPage } from './Styled/StylePage';

const Page = ({ children }) => {
  return (
    <ContainerPage>
      <Meta />
      <Header />
      {children}
    </ContainerPage>
  );
};

export default Page;
