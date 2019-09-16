import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Header from './Header';
import ContainerPage from './Styled/StylePage';

const Page = ({ children }) => {
  return (
    <ContainerPage>
      <Meta />
      <Header />
      {children}
    </ContainerPage>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
