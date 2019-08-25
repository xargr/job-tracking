import React, { Component } from 'react';
import Meta from './Meta';
import 'reset-css';

const Page = ({ children }) => (
  <>
    <Meta />
    {children}
  </>
);
export default Page;
