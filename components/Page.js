import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';

const Page = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
  </>
);
export default Page;
