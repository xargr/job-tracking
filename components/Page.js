import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import ModalForm from './ModalForm';

const Page = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
    <ModalForm />
  </>
);

export default Page;
