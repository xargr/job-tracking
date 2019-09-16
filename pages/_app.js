import App from 'next/app';
import React from 'react';
import Page from '../components/Page';
import JobContextProvider from '../components/context/JobContext';

import 'reset-css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <JobContextProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </JobContextProvider>
    );
  }
}
