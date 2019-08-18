import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
    <Footer />
  </>
);

export default Page;
